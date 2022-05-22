<template>
  <v-switch
    inset
    id="dark-mode"
    v-model="$vuetify.theme.dark"
    @change="darkModeChanged"
    :label="`Dark Mode`"
  ></v-switch>
</template>

<script lang="ts">
import { mq } from "@/utils/darkMode";
import Vue from "vue";

export default Vue.extend({
  beforeMount() {
    this.$vuetify.theme.dark = mq.matches || localStorage.theme === "dark";
  },

  methods: {
    darkModeChanged(newValue: boolean) {
      this.$vuetify.theme.dark = newValue;
      localStorage.theme = newValue ? "dark" : "light";
    },
  },
});
</script>
