export default {
  development: {
    globalURI: "/api",
    seedDB: true,
  },
  test: {
    globalURI: "/api",
    seedDB: false,
  },
  production: {
    globalURI: "/api",
    seedDB: false,
  },
};
