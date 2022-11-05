export default {
  dev: {
    // localhost:8000/api/** -> https://preview.pro.ant.design/api/**
    '/api/': {
      target: 'http://192.168.1.10:8080/',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  test: {},
  pre: {},
};
