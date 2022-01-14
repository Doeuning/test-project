module.exports = {
  devServer: {
    port: 8080,
    overlay: false,
    disableHostCheck: true,
    proxy: {
      "/b2b/api": {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
      },
    },
  },
};
