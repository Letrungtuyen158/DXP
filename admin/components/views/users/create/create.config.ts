import * as Yup from "yup";

export const mapPropsToValues = (props: any) => {
  return {
    fullName: props?.defaultData?.fullName || "",
    email: props?.defaultData?.email || "",
    password: props?.defaultData?.password || "",
    confirmPassword: props?.defaultData?.password || "",
    roles: props?.defaultData?.roles?.[0] || "admin",
  };
};

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().max(50, "Must be 50 characters or less").trim("dd").required("Required"),
  email: Yup.string().email("Invalid email address").trim().required("Required"),
  password: Yup.string()
    .min(8, "Too short")
    .trim()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  confirmPassword: Yup.string()
    .trim()
    .when("password", {
      is: (value: any) => (value && value.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Both password need to be the same"),
    })
    .required("Required"),
});
