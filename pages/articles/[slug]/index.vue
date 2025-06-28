<template>
  <div>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <article v-else-if="article">
      <h1>{{ article.title }}</h1>
      <img
        v-if="article.cover.url"
        :src="getMediaUrl(article.cover.url)"
        :alt="article.cover.alternativeText || article.title"
      />
      <div v-sanitize-html="article.body" />
      <div class="categories">
        <span class="category-tag">
          {{ article.category.name }}
        </span>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import type { IStrapiArticle } from '~/types/strapi-article';

const { params } = useRoute();
const { getMediaUrl } = useStrapi();

const { slug } = params;

const { data, pending, error } = await useFetch<IStrapiArticle>(
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
</script>
