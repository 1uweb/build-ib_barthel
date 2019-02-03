<template>
  <div>
    <navigation/>
    <main class="app-root">
      <section class="build">
        <div class="wrapper">
          <div class="build-text">
            <h1>Wir bauen gerade.</h1>
            <div class="plane"></div>
            <p>Die Bauarbeiter sind bald fertig und sind schon gespannt darauf euch die neue Homepage zu präsentieren.</p>
          </div>
          <div class="build-img">
            <img
              src="/build/under_construction.46pa741ewqre.svg"
              width="100%"
              alt="under_construction"
            >
          </div>
        </div>
      </section>
    </main>
    <sitemap/>
  </div>
</template>

<script>
import Navigation from "~/components/Navigation";
import Sitemap from "~/components/Sitemap";

export default {
  components: {
    Navigation,
    Sitemap
  },
  head: {
    title: "Ingenieurbüro Barthel",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "pkg.description" }
    ]
  }
};
</script>

