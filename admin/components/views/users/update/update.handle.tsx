import { FormikBag, FormikProps, withFormik } from "formik";
import { ToastError, ToastSuccess } from "utils/toast";
import { checkApiStatus } from "utils/common";
import { keys } from "ramda";
import { mapPropsToValues, validationSchema } from "../create/create.config";
import Api from "services/api";
import Router from "next/router";
import Swal from "sweetalert2";
import UpdateForm from "./update.form";

interface IForm {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  roles: string;
}

interface IValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  roles: string;
}

export type IProps = FormikProps<IForm>;

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  enableReinitialize: true,
  handleSubmit: async (values: any, formikBag: FormikBag<any, IValues>) => {
    Swal.showLoading();
    const { defaultData } = formikBag?.props;
    const data: any = {};
    keys(values).map((key: any) => {
      if (key === "confirmPassword") {
        return;
      }

      if (key === "roles" && values.roles !== defaultData?.roles?.[0]) {
        data.roles = [values.roles];
        return;
      }

      if (["fullName", "email", "password"].includes(key) && values[key] !== defaultData[key]) {
        data[key] = values[key];
      }
    });
    try {
      const res = await Api.patchUserById(defaultData?.id, data);
      checkApiStatus(res) ? ToastSuccess("Update success") : ToastError("Update fail");
      Router.push("/users");
    } catch (error: any) {
      ToastError(error.message);
    }
  },
});

export default MyEnhancedForm(UpdateForm);
