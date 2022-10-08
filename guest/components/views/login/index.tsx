import { FormikBag, withFormik } from "formik";
import { ROUTERS } from "constants/router.constant";
import { TOKEN_TIME } from "constants/login.constant";
import { ToastError } from "utils/toast";
import { checkApiStatus, getErrorMessage } from "utils/common";
import { mapPropsToValues, validationSchema } from "./login.config";
import { setCookies } from "cookies-next";
import { withRouter } from "next/router";
import Api from "services/api";
import LoginForm from "./login.form";

interface IValues {
  email: string;
  password: string;
  remember: boolean;
}

const MyEnhancedForm = withFormik({
  mapPropsToValues,
  validationSchema,
  handleSubmit: async (values: IValues, formikBag: FormikBag<any, IValues>) => {
    const { router } = formikBag.props;
    const { setSubmitting } = formikBag;

    const data = {
      email: values.email,
      password: values.password,
    };

    try {
      setSubmitting(true);
      const res: any = await Api.login(data);

      if (checkApiStatus(res)) {
        setSubmitting(false);
        if (values.remember) {
          setCookies("secret", res.data.token, { maxAge: TOKEN_TIME.remember });
        } else {
          setCookies("secret", res.data.token, { maxAge: TOKEN_TIME.default });
        }
        router.push(ROUTERS.ADMIN);
      } else {
        setSubmitting(false);
        ToastError(getErrorMessage(res?.data?.error?.message));
      }
    } catch (error: any) {
      ToastError(error.message);
    }
  },
});

export default withRouter(MyEnhancedForm(LoginForm));
