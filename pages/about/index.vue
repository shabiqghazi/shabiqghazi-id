<template>
  <div>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <article v-else-if="about">
      <h1>{{ about.title }}</h1>
    </article>
  </div>
</template>

<script setup lang="ts">
import type { IStrapiAbout } from "~/types/strapi-about";

const { getMediaUrl } = useStrapi();

const { data, pending, error } = await useFetch<IStrapiAbout>("/api/about");

const about = computed(() => {
  return data.value;
});

// SEO Meta
useSeoMeta({
  title: () => about.value?.seo?.metaTitle,
  ogTitle: () => about.value?.seo?.metaTitle,
  description: () => about.value?.seo?.metaDescription || "Read this about",
  ogImage: () =>
    about.value?.seo?.shareImage?.url
      ? getMediaUrl(about.value?.seo?.shareImage?.url)
      : undefined,
});
</script>
