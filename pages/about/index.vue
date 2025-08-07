<template>
  <base-page-title
    :page-title="pageData.pageTitle"
    :page-breadcrumbs="pageData.pageBreadcrumbs"
  />
  <div class="min-h-screen py-10 md:px-20 px-5">
    <article>
      <h1 class="text-2xl font-bold my-40 text-center">
        Tentang saya, Shabiq Ghazi Arkaan
      </h1>
      <AboutContent />
    </article>
  </div>
</template>

<script setup lang="ts">
import AboutContent from "~/components/about/AboutContent.vue";
import type { IStrapiAbout } from "~/types/strapi-about";

const { getMediaUrl } = useStrapi();

const { data } = await useFetch<IStrapiAbout>("/api/about");

const about = computed(() => {
  return data.value;
});

const pageData = {
  pageTitle: "Tentang",
  pageBreadcrumbs: [
    {
      title: "Beranda",
      route: "/",
    },
    {
      title: "Tentang",
      route: "/about",
    },
  ],
};

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
