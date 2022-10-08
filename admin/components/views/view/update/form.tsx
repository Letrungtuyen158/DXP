import { FormikBag, withFormik } from "formik";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { mapPropsToValues, validationSchema } from "../config";
import { omit } from "ramda";
import { withRouter } from "next/router";
import Api from "services/api";
import Swal from "sweetalert2";
import UpdateNewspaperForm from "./view";

interface IValues {
  title: string;
  content: string;
  url: string;
  author: string;
  newspaper: string;
  type: string;
  newsAt: string;
  status: string;
  files: any;
  idDelete: any;
  createdAt: any;
}

const EnhanceForm = withFormik({
  mapPropsToValues,
  validationSchema,
  enableReinitialize: true,
  handleSubmit: async (values: IValues, formikBag: FormikBag<any, IValues>) => {
    const { router, id } = formikBag.props;
    const data = omit(["files", "idDelete"], {
      ...values,
      newsAt: new Date(values.newsAt).toISOString(),
      createdAt: new Date(values.createdAt).toISOString(),
    });
    const formData = new FormData();
    formData.append("files", values.files);
    Swal.showLoading();
    try {
      const [res, res1] = await Promise.all([
        Api.updateNewspaper(id, data),
        Api.uploadNewspaperImg(id, formData),
      ]);
      await Api.deleteImage(values.idDelete);
      if (checkApiStatus(res) && checkApiStatus(res1)) {
        ToastSuccess("Bạn đã cập nhập thành công");
        router.back();
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  },
});

export default withRouter(EnhanceForm(UpdateNewspaperForm));
