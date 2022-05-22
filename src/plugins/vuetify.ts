import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import colors from "vuetify/lib/util/colors";

import { mq } from "@/utils/darkMode";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    // Set default dark mode based on system preferences
    dark: mq.matches,
    themes: {
      light: {
        accent: colors.shades.black,
        secondary: colors.shades.black,
        // anchor: "",
        primary: colors.blue.darken1,
        info: colors.blue,
        success: colors.green,
        warning: colors.orange.accent3,
        error: colors.red.accent3,
      },
      dark: {
        accent: colors.shades.black,
        // anchor: "",
        primary: colors.blue.lighten3,
        secondary: colors.amber,
        info: colors.blue,
        success: colors.green,
        warning: colors.orange.accent3,
        error: colors.red.accent3,
      },
    },
  },
  icons: {
    iconfont: "mdi",
  },
});

export default vuetify;
