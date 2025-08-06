<template>
  <base-page-title
    :page-title="pageData.pageTitle"
    :page-breadcrumbs="pageData.pageBreadcrumbs"
  />
  <div class="md:px-20 px-5 flex py-20">
    <div class="grow">
      <div class="grid grid-cols-3">
        <HomeArticleCard
          v-for="value in ['', '', '', '', '', '', '', '', '', '']"
        />
      </div>
    </div>
    <div class="flex flex-col">
      <BaseSidebar />
    </div>
  </div>
</template>

<script setup async lang="ts">
import type { IStrapiArticle } from "~/types/strapi-article";

// pages/blog/[slug].vue
const { query } = useRoute();

// Fetch article by slug with SSR
const { data } = await useFetch<IStrapiArticle[]>(`/api/articles`, {
  query,
});

// Get first article from response
const articles = computed(() => {
  return data.value;
});

const pageData = {
  pageTitle: "Artikel",
  pageBreadcrumbs: [
    {
      title: "Beranda",
      route: "/",
    },
    {
      title: "Artikel",
      route: "/articles",
    },
  ],
};
</script>
