import { FormikBag, withFormik } from "formik";
import { SOURCE_TYPES } from "constants/founder.constants";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { mapPropsToValues } from "components/views/founder/create.config";
import { validationSchema } from "./config";
import { withRouter } from "next/router";
import Api from "services/api";
import FormUpdate from "./update.view";
import Swal from "sweetalert2";

interface IForm {
  branding: string;
  content: string;
  logoImg: null;
  fileAvatar: null;
  url: string;
  listIdImgDelete: any;
  avatar: any;
  logo: any;
}
const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  enableReinitialize: true,
  handleSubmit: async (values: any, formikBag: FormikBag<any, IForm>) => {
    Swal.showLoading();
    const { defaultData } = formikBag.props;
    const data = {
      branding: values.branding,
      content: values.content,
      url: values.url,
    };
    const listImgDelete = values.listIdImgDelete;
    const unique: any = Array.from(new Set(listImgDelete));
    const formLogo: any = new FormData();
    const fileLogo: any = values.logo;
    formLogo.append("logoImg", fileLogo);
    const formAvatar: any = new FormData();
    const fileAvatar: any = values.avatar;
    formAvatar.append("formAvatar", fileAvatar);
    try {
      const res: any = await Api.patchFounder(defaultData?.id, data);
      if (checkApiStatus(res)) {
        const [res1, res2] = await Promise.all([
          Api.postFounderImg(defaultData.id, formLogo, SOURCE_TYPES.FOUNDER_LOGO),
          Api.postFounderImg(defaultData.id, formAvatar, SOURCE_TYPES.FOUNDER),
        ]);
        for (let i = 0; i < unique.length; i++) {
          await Api.deleteImage(unique[i]);
        }

        if (checkApiStatus(res1) && checkApiStatus(res2)) {
          ToastSuccess("Cập nhật founder thành công");
          formikBag?.props?.router?.back();
        }
      } else {
        ToastError(getErrorMessage(res?.data?.error?.message));
      }
    } catch (error: any) {
      ToastError(error?.message);
    }
  },
});

export default withRouter(MyEnhancedForm(FormUpdate));
