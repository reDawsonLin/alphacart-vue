module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/base.scss";
          @import "@/assets/scss/reset.scss";
        `
      }
    }
  }
};