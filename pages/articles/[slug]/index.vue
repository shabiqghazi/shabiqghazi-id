<template>
  <base-page-title
    :page-title="pageData.pageTitle"
    :page-breadcrumbs="pageData.pageBreadcrumbs"
  />
  <div class="md:px-20 px-5 flex flex-col lg:flex-row py-20 gap-20 lg:gap-0">
    <article class="grow flex flex-col gap-8">
      <div class="categories text-xs flex gap-4 items-center justify-between">
        <p class="flex items-center gap-2">
          <CalendarDays :size="10" />
          <span>{{ formatDateHumanize(article?.publishedAt ?? "") }}</span>
        </p>
        <Badge variant="secondary" class="bg-green-200 text-green-500 text-xs">
          <Tag />
          <span>{{ article?.category.name }}</span>
        </Badge>
      </div>
      <h1 class="text-2xl font-bold text-center">
        {{ article?.title }}
      </h1>
      <NuxtImg
        v-if="article?.cover.url"
        :src="getMediaUrl(article.cover.url)"
        :srcset="getStrapiSrcSet(article.cover.formats)"
        :alt="article.title"
        loading="lazy"
      />
      <div v-sanitize-html="article?.body" />
    </article>
    <div class="flex flex-col">
      <BaseSidebar />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CalendarDays, Tag } from "lucide-vue-next";
import Badge from "~/components/ui/badge/Badge.vue";
import type { IStrapiArticle } from "~/types/strapi-article";
import { formatDateHumanize } from "~/utilities/data.util";

const { params } = useRoute();
const { getMediaUrl, getStrapiSrcSet } = useStrapi();

const { slug } = params;

const { data, pending } = await useFetch<IStrapiArticle>(
  `/api/articles/${slug}`
);

const article = computed(() => {
  return data.value;
});

// SEO Meta
useSeoMeta({
  title: () => article.value?.seo.metaTitle,
  ogTitle: () => article.value?.seo.metaTitle,
  description: () => article.value?.seo.metaDescription || "Read this article",
  ogImage: () =>
    article.value?.cover.previewUrl
      ? getMediaUrl(article.value?.cover.previewUrl)
      : undefined,
});

// 404 if article not found
if (!pending.value && !article.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Article not found",
  });
}

const pageData = computed(() => ({
  pageTitle: "Artikel",
  pageBreadcrumbs: [
    { title: "Beranda", route: "/" },
    { title: "Artikel", route: "/articles" },
    {
      title: article.value?.title ?? "",
      route: article.value?.slug ? `articles/${article.value?.slug}` : "/",
    },
  ],
}));
</script>
