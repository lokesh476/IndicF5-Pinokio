const path = require("path");

module.exports = {
  version: "1.0",
  title: "IndicF5 TTS (Hindi)",
  description: "Text-to-Speech using IndicF5 for Indian languages",
  icon: "icon.png",
  menu: async (kernel, info) => {
    const installed = info.exists("env");
    const installing = info.running("install.json");
    const running = info.running("start.json");

    if (installing) {
      return [{
        icon: "fa-solid fa-spinner fa-spin",
        text: "Installing...",
        href: "install.json",
        default: true
      }];
    }

    if (!installed) {
      return [{
        icon: "fa-solid fa-download",
        text: "Install",
        href: "install.json",
        default: true
      }];
    }

    if (running) {
      return [{
        icon: "fa-solid fa-stop",
        text: "Stop",
        href: "stop.json",
        default: true
      }];
    }

    return [{
      icon: "fa-solid fa-play",
      text: "Start",
      href: "start.json",
      default: true
    }];
  }
};
