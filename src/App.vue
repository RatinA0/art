<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <v-app>
    <header>
      <label class="logo-label"> ART </label>

      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </header>

    <router-view />
  </v-app>
</template>

<style>
@import "@/assets/base.css";

#app {
  justify-content: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo-label {
  display: block;
  font-size: 100px;
  font-weight: 200;
  margin-right: 2rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.nav-title {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.2s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    font-size: 1.5rem;
  }
}
</style>
