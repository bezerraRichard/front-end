module.exports = {
  rootDir: "src",
  transform: {
    "^.+\\.(j|t)sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  globals: {
    designSystem: require("@esign-system/esign-system"),
  },
};
