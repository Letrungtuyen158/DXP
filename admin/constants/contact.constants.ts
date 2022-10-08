const STATUS: any = {
  DONE: "DONE",
  PENDING: "PENDING",
};
const VALUE_SELECT = {
  STATUS_PENDING: "Chưa liên hệ",
  STATUS_DONE: "Đã liên hệ",
};

const CONTACT_ITEMS = [
  {
    id: 1,
    content: "Chưa liên hệ",
    value: STATUS.PENDING,
  },
  {
    id: 2,
    content: "Đã liên hệ",
    value: STATUS.DONE,
  },
];
export { STATUS, VALUE_SELECT, CONTACT_ITEMS };
