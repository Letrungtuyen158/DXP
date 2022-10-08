import { checkApiStatus } from "utils/common";
import { mapPropsToValues, validationSchema } from "./contact.config";
import { withFormik } from "formik";
import Api from "services/api";
import FormContact from "./contact.form";
import Swal from "sweetalert2";

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit: (values: any, { resetForm }: { resetForm: any }) => {
    Swal.showLoading();
    const postContact = async () => {
      try {
        const res = await Api.postContacts(values);
        if (checkApiStatus(res)) {
          Swal.fire("Gửi tin nhắn thành công", "", "success");
          resetForm();
        } else {
          Swal.fire("Hệ thống đang bảo trì, xin quý khách vui lòng thử lại sau", "", "error");
        }
      } catch (e) {
        Swal.fire("Hệ thống đang bảo trì, xin quý khách vui lòng thử lại sau", "", "error");
      }
    };
    postContact();
  },
});

export default MyEnhancedForm(FormContact);
