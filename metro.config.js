const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Agregar configuración del servidor
config.server = {
  port: 5554, // Cambia este puerto al que necesites
};

module.exports = withNativeWind(config, { input: "./assets/global.css" });
