import { FormikBag, FormikProps, withFormik } from "formik";
import { POST_TYPE, STATUS_POST } from "../../../../../constants/Sharing.constant";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { mapPropsToValues, validationSchema } from "./create.config";
import { withRouter } from "next/router";
import Api from "services/api";
import CreatePostForm from "./create.view";
import Swal from "sweetalert2";
import moment from "moment";

interface IForm {
  sharingAt: string;
  title: string;
  content: string;
  status: boolean;
  type: string;
  tag: string;
  slug: string;
  createdAt: any;
}

export type IProps = FormikProps<IForm>;

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit: async (values: any, formikBag: FormikBag<any, any>) => {
    const { router } = formikBag.props;

    Swal.showLoading();
    const data = {
      title: values.title,
      content: values.content,
      tag: values.tag,
      status: values.status ? STATUS_POST.SHOW : STATUS_POST.HIDE,
      type: values.type || POST_TYPE.NORMAL,
      sharingAt: moment(values.sharingAt),
      slug: values?.slug,
      createdAt: moment(values?.createdAt),
    };

    try {
      const res: any = await Api.createPostSharing(data);
      if (checkApiStatus(res)) {
        const formData = new FormData();
        formData.append("files", values.filesPost);
        const result = await Api.updatePhotoSharingById(res?.data?.id, formData);

        if (checkApiStatus(result)) {
          ToastSuccess("Tạo tin tức thành công");
          router.back();
        } else {
          ToastError(getErrorMessage("Tạo tin tức thất bại"));
        }
      } else {
        ToastError(getErrorMessage("Tạo tin tức thất bại"));
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  },
});

export default withRouter(MyEnhancedForm(CreatePostForm));
