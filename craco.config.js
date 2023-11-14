const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@apis": path.resolve(__dirname, "src/apis"),
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@store": path.resolve(__dirname, "src/store"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@server": path.resolve(__dirname, "src/server"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@enums": path.resolve(__dirname, "src/enums"),
      "@providers": path.resolve(__dirname, "src/providers"),
      "@common": path.resolve(__dirname, "src/common"),
    },
  },
};
