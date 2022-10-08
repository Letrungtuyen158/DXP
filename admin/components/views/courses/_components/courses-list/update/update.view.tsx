import { COURSE_STATUS } from "constants/course.constant";
import { TextInput } from "components/form";
import { memo } from "react";
import ContentHeader from "components/layouts/content-header";
import TextInputStrict from "components/form/text-input/text-input-strict";

function UpdateForm(props: any) {
  const { handleSubmit, handleCancel, setFieldValue, values } = props;
  return (
    <div className="w-full px-10 mx-auto container">
      <ContentHeader title={"Khoá học"} searchHidden={false}>
        <p className="text-lg">Các khoá học</p>
      </ContentHeader>
      <form onSubmit={handleSubmit}>
        <TextInputStrict label={"Khoá học"} name={"courseName"} defaultValue={values.courseName} />
        <TextInput label={"Ngày khai giảng"} name={"openingDate"} type={"date"} />
        <TextInputStrict label={"Lịch học"} name={"schedule"} defaultValue={values.schedule} />
        <TextInputStrict label={"Giờ học"} name={"time"} defaultValue={values.time} />
        <TextInputStrict label={"Giảng viên"} name={"teacher"} defaultValue={values.teacher} />
        <TextInput label={"Số buổi học"} name={"numberOfLessons"} type="number" minNumber={0} />
        <TextInputStrict label={"Học phí"} name={"fee"} defaultValue={values.fee} positive />
        <TextInputStrict label={"Địa điểm"} name={"location"} defaultValue={values.location} />
        <div className="flex justify-end items-end gap-14">
          <div className="flex justify-start items-center gap-4 mt-5">
            <input
              type="radio"
              name="status"
              value={COURSE_STATUS.SHOW}
              checked={values.status === COURSE_STATUS.SHOW ? true : false}
              onClick={() => setFieldValue("status", COURSE_STATUS.SHOW)}
            />
            <label className="font-semibold text-lg">Hiển thị</label>
          </div>
          <div className="flex justify-start items-center gap-4 mt-[30px]">
            <input
              type="radio"
              name="status"
              value={COURSE_STATUS.HIDE}
              checked={values.status === COURSE_STATUS.HIDE ? true : false}
              onClick={() => setFieldValue("status", COURSE_STATUS.HIDE)}
            />
            <label className="font-semibold text-lg">Ẩn</label>
          </div>
        </div>
        <div className="flex justify-end items-center gap-3 my-[50px]">
          <button className="btn-cancel" onClick={handleCancel} type="button">
            Huỷ
          </button>
          <button type="submit" className="btn-upload">
            Hoàn thành
          </button>
        </div>
      </form>
    </div>
  );
}
export default memo(UpdateForm);
