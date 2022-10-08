import { FormikBag, FormikProps, withFormik } from "formik";
import { SOURCE_TYPES } from "constants/founder.constants";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { mapPropsToValues, validationSchema } from "../create.config";
import { withRouter } from "next/router";
import Api from "services/api";
import FounderForm from "./create.view";
import Swal from "sweetalert2";

interface IForm {
  url: string;
  branding: string;
  content: string;
  logoImg: null;
  fileAvatar: null;
}
export type IProps = FormikProps<IForm>;

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit: async (values: IForm, formikBag: FormikBag<any, IForm>) => {
    Swal.showLoading();
    const { router } = formikBag.props;
    const data = {
      branding: values.branding,
      content: values.content,
      url: values.url,
    };
    const formLogo: any = new FormData();
    const fileLogo: any = values.logoImg;
    formLogo.append("logoImg", fileLogo);

    const formAvatar: any = new FormData();
    const fileAvatar: any = values.fileAvatar;
    formAvatar.append("formAvatar", fileAvatar);

    try {
      const res: any = await Api.postFounder(data);
      if (checkApiStatus(res)) {
        const res1: any = await Api.postFounderImg(
          res?.data?.id,
          formLogo,
          SOURCE_TYPES.FOUNDER_LOGO
        );

        const res2: any = await Api.postFounderImg(res?.data?.id, formAvatar, SOURCE_TYPES.FOUNDER);
        if (checkApiStatus(res1) && checkApiStatus(res2)) {
          ToastSuccess("Tạo founder thành công");
          router.back();
        }
      } else {
        ToastError(getErrorMessage(res?.data?.error?.message));
      }
    } catch (error: any) {
      ToastError(error?.message);
    }
  },
});

export default withRouter(MyEnhancedForm(FounderForm));
