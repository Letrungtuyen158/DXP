import { ROUTERS } from "constants/router.constant";

export const HEADERS = [
  {
    route: ROUTERS.HOME,
    label: "Trang chủ",
    subRoute: [ROUTERS.GALLERY_PHOTOS],
  },
  {
    route: ROUTERS.ABOUT_ME,
    label: "Về tôi",
  },
  {
    route: ROUTERS.COURSES,
    label: "Khoá học",
  },
  {
    route: ROUTERS.VIEW,
    label: "Góc nhìn",
    label_subHeader: "Báo chí",
  },
  {
    route: ROUTERS.SHARE,
    label: "Chia sẻ",
    label_subHeader: "Bài viết",
  },
  {
    route: ROUTERS.CONTACT,
    label: "Liên hệ",
  },
];
