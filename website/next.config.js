require("dotenv").config();

module.exports = {
  env: {
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION,
  },
  trailingSlash: true,
  // exportTrailingSlash: true,
  // exportPathMap: function () {
  //   return {
  //     "/": { page: "/" },
  //     "/contact": { page: "/contact" },
  //     "/werkwijze": { page: "/werkwijze" },
  //   };
  // },
};
