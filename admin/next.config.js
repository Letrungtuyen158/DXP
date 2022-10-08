module.exports = {
  basePath: "/admin",
  images: {
    domains: ["web-duongxuanphi.s3.ap-southeast-1.amazonaws.com", "5002302-s3user.storebox.vn"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/founder",
        permanent: true,
      },
    ];
  },
};
