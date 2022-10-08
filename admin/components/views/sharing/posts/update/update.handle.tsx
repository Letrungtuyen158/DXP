import { FormikBag, FormikProps, withFormik } from "formik";
import { POST_TYPE, STATUS_POST } from "../../../../../constants/Sharing.constant";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { mapPropsToValues } from "../create/create.config";
import { validationSchema } from "./update.config";
import { withRouter } from "next/router";
import Api from "services/api";
import Swal from "sweetalert2";
import UpdatePostForm from "./update.view";
import moment from "moment";

interface IForm {
  sharingAt: string;
  title: string;
  content: string;
  status: boolean;
  type: string;
  tag: string;
  files: any;
  createdAt: any;
  slug: string;
}

export type IProps = FormikProps<IForm>;

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  enableReinitialize: true,
  handleSubmit: async (values: any, formikBag: FormikBag<any, any>) => {
    const { defaultData } = formikBag.props;
    const { router } = formikBag.props;
    Swal.showLoading();
    const data = {
      title: values.title,
      content: values.content,
      tag: values.tag,
      status: values.status ? STATUS_POST.SHOW : STATUS_POST.HIDE,
      type: values.type || POST_TYPE.NORMAL,
      sharingAt: moment(values.sharingAt),
      createdAt: moment(values?.createdAt),
      slug: values.slug,
    };
    try {
      const formData = new FormData();
      formData.append("files", values.files);
      const [res1, res2]: any = await Promise.all([
        Api.updatePostSharing(defaultData?.id, data),
        Api.updatePhotoSharingById(defaultData?.id, formData),
      ]);
      await Api.deleteImage(values.idDelete);
      if (checkApiStatus(res1) && checkApiStatus(res2)) {
        ToastSuccess("Cập nhật bài viết thành công");
        router.back();
      } else {
        ToastError(getErrorMessage("Cập nhật bài viết thất bại"));
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  },
});

export default withRouter(MyEnhancedForm(UpdatePostForm));
