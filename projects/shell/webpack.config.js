const { shareAll, withModuleFederationPlugin, SharedMappings } = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json')
)

module.exports = withModuleFederationPlugin({

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto" }),
    ...sharedMappings.getDescriptors()
  }

});
