<template>
  <div>
    <HomeFeatured />
    <HomeAbout />
    <HomeArticles />
  </div>
</template>

<script setup lang="ts">
import HomeAbout from "~/components/home/HomeAbout.vue";
import HomeArticles from "~/components/home/HomeArticles.vue";
import HomeFeatured from "~/components/home/HomeFeatured.vue";
</script>
