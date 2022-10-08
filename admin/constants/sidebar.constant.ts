import { ROUTERS } from "constants/router.constant";

export const MENU = [
  {
    name: "Admin",
    subs: [
      {
        name: "Danh sách",
        link: ROUTERS.USERS,
      },
    ],
    onlyAdmin: true,
  },
  {
    name: "Trang chủ",
    subs: [
      {
        name: "Founder/CEO",
        link: ROUTERS.FOUNDER,
      },
    ],
    // onlyAdmin: true,
  },
  {
    name: "Khoá học",
    subs: [
      {
        name: "Các khoá học",
        link: ROUTERS.COURSE_PROGRAM,
      },
      {
        name: "Đăng ký khoá học",
        link: ROUTERS.COURSE_REGIST,
      },
      {
        name: "Feedback học viên",
        link: ROUTERS.COURSE_REVIEW,
      },
      {
        name: "Banner",
        link: ROUTERS.COURSE_BANNER,
      },
    ],
  },
  {
    name: "Góc nhìn",
    subs: [
      {
        name: "Báo chí",
        link: ROUTERS.VIEW,
      },
      {
        name: "Góc nhìn về tôi",
        link: ROUTERS.VIEW_ABOUT_ME,
      },
    ],
  },
  {
    name: "Chia sẻ",
    subs: [
      {
        name: "Bài viết",
        link: ROUTERS.POSTS,
      },
      {
        name: "Bình luận bài viết",
        link: ROUTERS.POST_REVIEW,
      },
    ],
  },
  {
    name: "Gallery",
    subs: [
      {
        name: "Hình ảnh",
        link: ROUTERS.IMAGE,
      },
      {
        name: "Video",
        link: ROUTERS.VIDEO,
      },
    ],
  },
  {
    name: "Liên hệ",
    subs: [
      {
        name: "Thông tin nhận",
        link: ROUTERS.CONTACT,
      },
    ],
  },
];

export const ADMIN_ROLE = "admin";
