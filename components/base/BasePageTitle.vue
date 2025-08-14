<template>
  <section id="page-title" class="mt-20">
    <div
      class="md:px-20 px-5 h-96 flex flex-col justify-center items-center md:items-start gap-4 from-neutral-500 md:from-neutral-100 bg-gradient-to-r to-neutral-800 relative"
    >
      <img
        class="h-full absolute md:mask-l-from-20% md:mask-l-to-100% right-0 w-full md:w-2xl object-cover opacity-25 grayscale"
        :src="pageTitleImg"
        alt=""
        loading="lazy"
      />
      <h2 class="text-2xl font-bold z-10 text-neutral-200 md:text-neutral-800">
        {{ props.pageTitle }}
      </h2>
      <Breadcrumb class="flex flex-wrap justify-center gap-2 z-10">
        <BreadcrumbList
          v-for="(page, index) in props.pageBreadcrumbs"
          :key="page.route"
        >
          <BreadcrumbItem>
            <BreadcrumbLink
              :href="page.route"
              class="text-neutral-200 md:text-neutral-700 line-clamp-1"
            >
              {{ page.title }}
            </BreadcrumbLink>
            <BreadcrumbSeparator
              v-if="index !== props.pageBreadcrumbs.length - 1"
              class="text-neutral-200 md:text-neutral-700"
            >
              <Slash />
            </BreadcrumbSeparator>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-vue-next";
import pageTitleImg from "~/assets/images/page-title.jpeg";

interface IProps {
  pageTitle: string;
  pageBreadcrumbs: {
    title: string;
    route: string;
  }[];
}

const props = defineProps<IProps>();
</script>

<style></style>
