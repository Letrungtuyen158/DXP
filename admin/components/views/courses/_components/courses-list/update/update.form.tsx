import { FormikBag, FormikProps, withFormik } from "formik";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { mapPropsToValues, validationSchema } from "../config";
import { withRouter } from "next/router";
import Api from "services/api";
import Swal from "sweetalert2";
import UpdateForm from "./update.view";
import moment from "moment";

interface IForm {
  courseProgramId: number;
  courseName: string;
  openingDate: string;
  schedule: string;
  time: string;
  numberOfLessons: number;
  teacher: string;
  level: string;
  fee: string;
  location: string;
}

interface IValues {
  courseProgramId: number;
  courseName: string;
  openingDate: any;
  schedule: string;
  time: string;
  numberOfLessons: string;
  teacher: string;
  fee: string;
  location: string;
  status: string;
}

export type IProps = FormikProps<IForm>;

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  enableReinitialize: true,
  handleSubmit: async (values: IValues, formikBag: FormikBag<any, IValues>) => {
    Swal.showLoading();
    const { defaultData, router } = formikBag.props;
    const newOpeningDate = values.openingDate;
    const data = {
      courseName: values.courseName.trim(),
      schedule: values.schedule.trim(),
      time: values.time.trim(),
      teacher: values.teacher.trim(),
      fee: values.fee.trim(),
      location: values.location.trim(),
      status: values.status,
      openingDate: moment(newOpeningDate).utc().toISOString(),
      courseProgramId: Number(defaultData.courseProgramId),
      numberOfLessons: parseFloat(values.numberOfLessons),
    };

    try {
      const res: any = await Api.updateCourse(defaultData.id, data);

      if (checkApiStatus(res)) {
        ToastSuccess("Cập nhật khoá học thành công!");
        router.back();
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  },
});

export default withRouter(MyEnhancedForm(UpdateForm));
