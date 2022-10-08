import { FormikBag, FormikProps, withFormik } from "formik";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { mapPropsToValues, validationSchema } from "../config";
import { omit } from "ramda";
import { withRouter } from "next/router";
import Api from "services/api";
import Swal from "sweetalert2";
import ViewForm from "./view";
import moment from "moment";
interface IForm {
  title: string;
  content: string;
  url: string;
  author: string;
  newspaper: string;
  type: string;
  newsAt: string;
  status: string;
  files: any;
  slug: any;
  createdAt: any;
}
export type IProps = FormikProps<IForm>;
const EnhanceForm = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit: async (values: IForm, formikBag: FormikBag<any, any>) => {
    const { router } = formikBag.props;
    const data = omit(["files", "idDelete"], {
      ...values,
      newsAt: moment(values.newsAt),
      createdAt: moment(values.createdAt),
    });

    const formData = new FormData();
    formData.append("files", values.files);
    Swal.showLoading();
    try {
      const res: any = await Api.createNewspaper(data);
      if (checkApiStatus(res)) {
        const result = await Api.uploadNewspaperImg(res.data.id, formData);
        if (checkApiStatus(result)) {
          ToastSuccess("Tạo bài báo thành công");
          router.back();
        }
      } else {
        ToastError(res?.data.error.name);
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  },
});
export default withRouter(EnhanceForm(ViewForm));
