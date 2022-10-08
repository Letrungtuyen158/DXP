import * as yup from "yup";
import { COURSE_STATUS } from "constants/course.constant";
import { formatDate } from "utils/file";
const REGEX_MANE =
  /^([a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâếãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/i;
export const mapPropsToValues = (props: any) => {
  return {
    courseProgramId: props?.defaultData?.courseProgramId || "",
    courseName: props?.defaultData?.courseName || "",
    openingDate: formatDate(props?.defaultData?.openingDate).split("/").reverse().join("-") || "",
    schedule: props?.defaultData?.schedule || "",
    time: props?.defaultData?.time || "",
    numberOfLessons: props?.defaultData?.numberOfLessons || "",
    teacher: props?.defaultData?.teacher || "",
    fee: props?.defaultData?.fee || "",
    location: props?.defaultData?.location || "",
    status: props?.defaultData?.status || COURSE_STATUS.SHOW,
  };
};

export const validationSchema = yup.object().shape({
  courseName: yup.string().required("Required"),
  openingDate: yup.string().required("Required"),
  schedule: yup.string().required("Required"),
  time: yup.string().required("Required"),
  numberOfLessons: yup.number().min(1, "Must > 0").required("Required"),
  teacher: yup.string().matches(REGEX_MANE, "Name is invalid").required("Required"),
  fee: yup.string().required("Required"),
  location: yup.string().required("Required"),
});
