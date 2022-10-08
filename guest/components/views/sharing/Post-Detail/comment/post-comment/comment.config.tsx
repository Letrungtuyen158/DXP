import * as yup from "yup";

export const mapPropsToValues = () => {
  return {
    name: "",
    email: "",
    content: "",
    sharingId: 0,
  };
};

export const validationSchema = yup.object().shape({
  name: yup.string().trim().required("Required"),
  email: yup.string().email("Must be a valid email").required("Required"),
  content: yup.string().trim().required("Required"),
});
