import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { compose } from "ramda";
import { mapPropsToValues, validationSchema } from "./comment.config";
import { withFormik } from "formik";
import { withRouter } from "next/router";
import Api from "services/api";
import CommentForm from "./comment.form";

interface IpostComment {
  name: string;
  email: string;
  content: string;
}
const MyEnhancedForm = compose<any, any, any>(
  withRouter,
  withFormik({
    mapPropsToValues,
    validationSchema,
    handleSubmit: async (values: IpostComment, props: any) => {
      const { id } = props.props.router.query || "";
      const sharing = id.split("-");

      const { resetForm } = props;
      const data = {
        name: values.name,
        email: values.email,
        content: values.content,
        sharingId: Number(sharing[0]),
      };
      try {
        const res = await Api.postCommentSharings(data);

        if (checkApiStatus(res)) {
          ToastSuccess("Thông tin của bạn đã được gửi thành công");
          resetForm();
        } else {
          ToastError("Hệ thống đang bảo trì, xin quý khách vui lòng thử lại sau.");
        }
      } catch (e) {
        ToastError("Hệ thống đang bảo trì, xin quý khách vui lòng thử lại sau.");
      }
    },
  })
);

export default MyEnhancedForm(CommentForm);
