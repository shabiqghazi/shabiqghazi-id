<template>
  <div
    class="grid-rows-2 first:col-span-1 first:md:col-span-2 first:lg:col-span-3 first:row-span-2 group"
  >
    <Card
      class="py-0 overflow-clip border-0 shadow flex flex-col group-first:md:relative gap-3 h-full"
    >
      <NuxtImg
        v-if="props.article.cover.url"
        class="aspect-video object-cover group-first:md:w-full group-first:md:h-full group-first:md:brightness-50"
        :src="getMediaUrl(props.article.cover.url)"
        :srcset="getStrapiSrcSet(props.article.cover.formats)"
        :alt="props.article.title"
        loading="lazy"
      />
      <div
        class="flex flex-col gap-3 group-first:md:absolute bottom-0 group-first:md:p-4"
      >
        <CardContent class="px-3 gap-2 flex flex-col group-first:md:text-white">
          <p class="text-xs flex items-center gap-2">
            <CalendarDays :size="10" />
            <span>{{
              formatDateHumanize(props.article.publishedAt ?? "")
            }}</span>
          </p>
          <NuxtLink :href="`/articles/${props.article.slug}`">
            <h3 class="font-bold text-sm">
              {{ props.article.title }}
            </h3>
          </NuxtLink>
          <p
            class="text-sm line-clamp-2 group-first:md:line-clamp-5"
            v-clean-html-tag="props.article.body"
          ></p>
        </CardContent>
        <CardFooter class="px-0 pt-0 pb-3">
          <NuxtLink :href="`/articles/${props.article.slug}`">
            <Button
              size="sm"
              variant="link"
              class="hover:cursor-pointer hover:text-green-400 text-green-500 group-first:text-green-300 text-xs h-fit py-1 flex hover:gap-2 items-center"
            >
              <span> Baca Selengkapnya </span>
              <ArrowRight :size="12" />
            </Button>
          </NuxtLink>
        </CardFooter>
      </div>
    </Card>
  </div>
</template>
<script setup lang="ts">
import Card from "../ui/card/Card.vue";
import CardFooter from "../ui/card/CardFooter.vue";
import Button from "../ui/button/Button.vue";
import { ArrowRight } from "lucide-vue-next";
import type { IStrapiArticle } from "~/types/strapi-article";
import { formatDateHumanize } from "~/utilities/data.util";
import { CalendarDays } from "lucide-vue-next";

const { getMediaUrl, getStrapiSrcSet } = useStrapi();

interface Props {
  article: IStrapiArticle;
}

const props = defineProps<Props>();
</script>

<style></style>
