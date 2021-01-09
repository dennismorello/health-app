const fs = require("fs");
const path = require("path");

const getIonicConfigFile = () =>
  fs.readFileSync(path.resolve(__dirname, "../ionic.config.json"), {
    encoding: "utf-8",
  });

const getManifestFile = () =>
  fs.readFileSync(path.resolve(__dirname, "../build/manifest.json"), {
    encoding: "utf-8",
  });

const writeManifestFile = (manifestJson) => {
  const serializedManifest = JSON.stringify(manifestJson, undefined, 2);

  fs.writeFileSync(
    path.resolve(__dirname, "../build/manifest.json"),
    serializedManifest,
    { encoding: "utf-8" }
  );
};

module.exports = (ctx) => {
  const ionicConfigFile = getIonicConfigFile();
  const manifestFile = getManifestFile();

  const ionicConfigContent = JSON.parse(ionicConfigFile);
  const manifestContent = JSON.parse(manifestFile);

  const appName = ionicConfigContent.name;
  const shortAppName = appName.substring(0, 12);

  manifestContent.short_name = shortAppName;
  manifestContent.name = appName;

  writeManifestFile(manifestContent);
};
