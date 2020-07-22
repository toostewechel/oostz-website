require("dotenv").config();

module.exports = {
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/contact": { page: "/contact" },
      "/werkwijze": { page: "/werkwijze" },
    };
  },
};
