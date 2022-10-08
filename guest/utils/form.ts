import * as R from "ramda";
import { FORM_TYPE } from "constants/home.constants";
import { ToastError } from "./toast";
import moment from "moment";

export const checkLastSubmitForm = ({ type, request }: any) => {
  const name = type === FORM_TYPE.BOOKING ? "lastTimeSubmitBooking" : "lastTimeSubmitContact";
  const currentTime = moment();
  const timeSubmit = localStorage.getItem(name);
  if (!timeSubmit) {
    localStorage.setItem(name, JSON.stringify([currentTime]));
    request();
    return;
  }
  const arrTimeSubmit = JSON.parse(timeSubmit);
  const latestTime = moment(R.last(arrTimeSubmit));
  const timeDiff = currentTime.diff(latestTime, "seconds");
  //remove localstorage after 1 day
  if (currentTime.date() - latestTime.date() > 0) {
    localStorage.removeItem(name);
    localStorage.setItem(name, JSON.stringify([new Date().getTime()]));
    request();
  } else {
    //submit <= 5 times on the same day, time between submitting is 60s
    if (arrTimeSubmit.length < 5) {
      if (timeDiff > 60) {
        arrTimeSubmit.push(currentTime);
        localStorage.setItem(name, JSON.stringify(arrTimeSubmit));
        request();
      } else {
        ToastError(
          `Bạn yên tâm. Yêu cầu ${type === FORM_TYPE.CONTACT ? "liên hệ" : ""
          } của bạn đã được gửi thành công."`
        );
      }
    } else {
      //submitting at 6th
      if (timeDiff > 150) {
        localStorage.removeItem(name);
        localStorage.setItem(name, JSON.stringify([new Date().getTime()]));
        request();
      } else {
        ToastError(
          `Bạn yên tâm. Yêu cầu ${type === FORM_TYPE.CONTACT ? "liên hệ" : "đặt phòng"
          } của bạn đã được gửi thành công."`
        );
      }
    }
  }
};
