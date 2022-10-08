import { FormikProps, withFormik } from "formik";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { getErrorMessage } from "utils/common";
import { mapPropsToValues, validationSchema } from "./config";
import Api from "services/api";
import RegisterForm from "./registration.form";
import Swal from "sweetalert2";

interface IForm {
  name: string;
  phone: string;
  email: string;
  course: string;
}

export type IProps = FormikProps<IForm>;

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit: async (values, { resetForm }: { resetForm: any }) => {
    Swal.showLoading();
    const data: any = {
      phoneNumber: values.phone,
      fullName: values.name,
      email: values.email || "Empty",
      course: values.course || "Empty",
    };

    try {
      const res: any = await Api.postBookings(data);
      if (checkApiStatus(res)) {
        ToastSuccess("Đặt khoá học thành công");
        resetForm();
      } else {
        ToastError(getErrorMessage(res?.data?.error?.message));
      }
    } catch (error: any) {
      ToastError(getErrorMessage(error.message));
    }
  },
});

export default MyEnhancedForm(RegisterForm);
