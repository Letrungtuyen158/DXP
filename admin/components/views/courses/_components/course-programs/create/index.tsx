import { FormikBag, withFormik } from "formik";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { mapPropsToValues, validationSchema } from "../config";
import { withRouter } from "next/router";
import Api from "services/api";
import CourseProgramCreateForm from "./view";
import Swal from "sweetalert2";

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit: async (values: any, formikBag: FormikBag<any, any>) => {
    const router = formikBag.props.router;
    const data = {
      description: values.description,
      name: values.name,
      value: values.value,
      detail: values.detail,
      participants: values.participants,
      commit: values.commitment,
    };
    Swal.showLoading();
    try {
      const res: any = await Api.createCourseProgram(data);
      if (checkApiStatus(res)) {
        const formData = new FormData();
        Object.values(values.files).map((item: any) => {
          formData.append("files", item);
        });
        const formBanner = new FormData();
        formBanner.append("file", values.banner);
        try {
          const [result, result2] = await Promise.all([
            Api.uploadCourseImg(res.data.id, formData),
            Api.uploadBanner(res.data.id, formBanner),
          ]);
          if (checkApiStatus(result) && checkApiStatus(result2)) {
            ToastSuccess("Tạo chương trình học thành công");
            router.back();
          } else {
            ToastError(getErrorMessage(res?.data?.error?.message));
          }
        } catch (error: any) {
          ToastError(error.message);
        }
      } else {
        ToastError(getErrorMessage(res?.data?.error?.message));
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  },
});

export default withRouter(MyEnhancedForm(CourseProgramCreateForm));
