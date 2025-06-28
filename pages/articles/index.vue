<template>
  <div>
    <div v-if="articles">
      <h1>List of Artikel</h1>
      <ul v-if="articles?.length">
        <li v-for="article in articles" :key="article?.id">
          <NuxtLink
            :to="`articles/${article?.slug}`"
            class="text-blue-500 underline"
            >{{ article?.title }}</NuxtLink
          >
        </li>
      </ul>
      <p v-else>*No article found</p>
    </div>
    <div v-else>Loading...</div>
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
</script>
