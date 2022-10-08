import * as yup from "yup";

const mapPropsToValues = () => {
  return {
    email: "",
    password: "",
    remember: false,
  };
};

const PASSWORD_LENGTH_MIN = 8;
const validationSchema = yup.object().shape({
  email: yup.string().trim().required("Bạn chưa nhập email !").email("Làm ơn hãy ghi đúng email !"),
  password: yup
    .string()
    .trim()
    .min(PASSWORD_LENGTH_MIN, `Mật khẩu tối thiểu phải là ${PASSWORD_LENGTH_MIN} kí tự`)
    .required("Bạn chưa nhập password !"),
  remember: yup.boolean(),
});

export { mapPropsToValues, validationSchema };