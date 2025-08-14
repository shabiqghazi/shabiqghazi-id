<template>
  <base-page-title
    :page-title="pageData.pageTitle"
    :page-breadcrumbs="pageData.pageBreadcrumbs"
  />
  <div class="md:px-20 px-5 flex flex-col lg:flex-row py-20 gap-20 lg:gap-0">
    <div class="grow flex flex-col gap-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <template v-for="article in articles" :key="article.slug">
          <ArticleCard :article="article" />
        </template>
      </div>
      <Pagination
        v-slot="{ page }"
        :items-per-page="meta?.pagination.pageSize ?? 6"
        :total="meta?.pagination.total ?? 0"
        :default-page="fetchParams.page"
        @update:page="(page) => router.push(`?page=${page}`)"
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

<script setup lang="ts">
import ArticleCard from "~/components/articles/ArticleCard.vue";
import type { IStrapiCollectionResponse } from "~/types/strapi";
import type { IStrapiArticle } from "~/types/strapi-article";

const route = useRoute();
const router = useRouter();

const fetchParams = computed(() => ({
  page: parseInt((route.query.page as string) ?? "1"),
  pageSize: parseInt((route.query.pageSize as string) ?? "3"),
}));

const { data } = await useFetch<IStrapiCollectionResponse<IStrapiArticle>>(
  `/api/articles`,
  {
    query: fetchParams,
  }
);

const articles = computed(() => data.value?.data);
const meta = computed(() => data.value?.meta);

const pageData = {
  pageTitle: "Artikel",
  pageBreadcrumbs: [
    { title: "Beranda", route: "/" },
    { title: "Artikel", route: "/articles" },
  ],
};
</script>
