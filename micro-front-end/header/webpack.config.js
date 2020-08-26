const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "header",
    projectName: "header",
    webpackConfigEnv,
  });

  const designSystemExternals = {
    externals: ["@design-system/design-system"],
  };

  const rxjsExternals = {
    externals: [/^rxjs\/?.*$/],
  };

  const mergedConfig = webpackMerge.smart(
    defaultConfig,
    rxjsExternals,
    designSystemExternals
  );

  console.log(mergedConfig);

  return mergedConfig;
};
