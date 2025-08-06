<template>
  <base-page-title
    :page-title="pageData.pageTitle"
    :page-breadcrumbs="pageData.pageBreadcrumbs"
  />
  <div class="md:px-20 px-5 flex flex-col lg:flex-row py-20">
    <div class="grow flex flex-col gap-8">
      <div class="grid grid-cols-3 gap-4">
        <ArticleCard v-for="value in ['', '', '', '', '', '']" />
      </div>
      <Pagination
        v-slot="{ page }"
        :items-per-page="10"
        :total="30"
        :default-page="1"
      >
        <PaginationContent v-slot="{ items }">
          <PaginationPrevious />

          <template v-for="(item, index) in items" :key="index">
            <PaginationItem
              v-if="item.type === 'page'"
              :value="item.value"
              :is-active="item.value === page"
            >
              {{ item.value }}
            </PaginationItem>
          </template>

          <PaginationEllipsis :index="4" />

          <PaginationNext />
        </PaginationContent>
      </Pagination>
    </div>
    <div class="flex flex-col">
      <BaseSidebar />
    </div>
  </div>
</template>

<script setup async lang="ts">
import ArticleCard from "~/components/articles/ArticleCard.vue";
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
