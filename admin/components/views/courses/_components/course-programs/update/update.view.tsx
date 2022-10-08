import { FormikBag, FormikProps, withFormik } from "formik";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { mapPropsToValues, validationSchema } from "../config";
import { withRouter } from "next/router";
import Api from "services/api";
import Swal from "sweetalert2";
import UpdateCourseProgram from "./update.form";

interface IForm {
  courseName: string;
  introduction: string;
  description: string;
  content: string;
  files: any;
}

interface IValues {
  name: string;
  description: string;
  files: any;
  participants: string;
  value: string;
  listImgDelete: any;
  detail: string;
  commitment: string;
  banner: any;
}

export type IProps = FormikProps<IForm>;

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  enableReinitialize: true,
  handleSubmit: async (values: any, formikBag: FormikBag<any, IValues>) => {
    Swal.showLoading();
    const { defaultData, router } = formikBag.props;
    const data = {
      description: values.description,
      name: values.name,
      value: values.value,
      detail: values.detail,
      participants: values.participants,
      commit: values.commitment,
    };

    const listIdImgDelete = values.listImgDelete.filter((item: any) => {
      return item !== undefined;
    });
    try {
      const formData = new FormData();
      if (values.filesList) {
        let images = values.filesList;
        for (let i = 0; i < images.length; i++) {
          formData.append("files", images[i]);
        }
      }
      const formBanner = new FormData();
      formBanner.append("files", values.banner);
      const [res, res2, res3]: any = await Promise.all([
        Api.updateCourseProgram(defaultData?.id, data),
        Api.uploadCourseImg(defaultData?.id, formData),
        Api.uploadBanner(defaultData?.id, formBanner),
      ]);
      for (let i = 0; i < listIdImgDelete.length; i++) {
        await Api.deleteImage(listIdImgDelete[i]);
      }
      if (checkApiStatus(res) && checkApiStatus(res2) && checkApiStatus(res3)) {
        ToastSuccess("Cập nhật chương trình học thành công!");
        router.back();
      } else {
        ToastError(getErrorMessage(res?.data?.error?.message));
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  },
});

export default withRouter(MyEnhancedForm(UpdateCourseProgram));
