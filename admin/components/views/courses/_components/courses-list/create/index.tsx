import { FormikBag, FormikProps, withFormik } from "formik";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { mapPropsToValues, validationSchema } from "../config";
import { withRouter } from "next/router";
import Api from "services/api";
import CreateCourseForm from "./create.view";
import Swal from "sweetalert2";

interface IForm {
  courseProgramId: number;
  courseName: string;
  openingDate: string;
  schedule: string;
  time: string;
  numberOfLessons: number;
  teacher: string;
  fee: string;
  location: string;
  files: any;
  status: string;
}

export type IProps = FormikProps<IForm>;

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit: async (values: any, formikBag: FormikBag<any, any>) => {
    const { router } = formikBag.props;
    Swal.showLoading();
    const data = {
      courseName: values.courseName.trim(),
      schedule: values.schedule.trim(),
      time: values.time.trim(),
      teacher: values.teacher.trim(),
      fee: values.fee.trim(),
      location: values.location.trim(),
      status: values.status,
      openingDate: new Date(values.openingDate).toISOString(),
      courseProgramId: Number(router.query.programId),
      numberOfLessons: parseFloat(values.numberOfLessons),
    };
    try {
      const res: any = await Api.createCourse(data);
      if (checkApiStatus(res)) {
        ToastSuccess("Tạo khoá học thành công");
        router.back();
      } else {
        ToastError(getErrorMessage(res?.data?.error?.message));
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  },
});

export default withRouter(MyEnhancedForm(CreateCourseForm));
