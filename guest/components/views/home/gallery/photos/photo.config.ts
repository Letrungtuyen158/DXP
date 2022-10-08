export const breakpoints = {
  default: 4,
  1100: 3,
  700: 2,
};
export const FILTER_MULTIPLE_PHOTOS = {
  filter: {
    limit: 30,
    offset: 0,
    order: "createdAt DESC",
    where: {
      status: "SHOW",
    },
  },
};
export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};