import * as yup from "yup";

export const mapPropsToValues = () => {
  return {
    name: "",
    phone: "",
    email: "",
    course: "",
  };
};
const PHONE_LENGTH_MIN = 10;
const PHONE_LENGTH_MAX = 11;
const REGEX_MANE = /^([a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâếãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/i


export const validationSchema = yup.object().shape({
  name: yup.string().trim().matches(REGEX_MANE, "Dữ liệu không hợp lệ").required("Required"),
  phone: yup
    .string()
    .matches(/^\d+$/, "Dữ liệu phải là số")
    .min(PHONE_LENGTH_MIN)
    .max(PHONE_LENGTH_MAX)
    .required("Required"),
  email: yup.string().email("Invalid email!"),
  course: yup.string().trim(),
});
