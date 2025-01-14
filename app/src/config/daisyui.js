module.exports = {
    themes: [
      {
        sunset: {
          ...require("daisyui/src/theming/themes")["sunset"],
          text: "white",
          primary: "#9A3918",
        },
      },
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          text: "black",
          primary: "#FB923C",
        },
      },
    ],
  };
  