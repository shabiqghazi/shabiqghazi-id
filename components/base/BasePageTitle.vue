<template>
  <section id="page-title" class="mt-20">
    <div
      class="md:px-20 px-5 h-96 flex flex-col justify-center items-center md:items-start gap-4 bg-neutral-100"
    >
      <h2 class="text-2xl font-bold">{{ props.pageTitle }}</h2>
      <Breadcrumb class="flex gap-2">
        <BreadcrumbList
          v-for="(page, index) in props.pageBreadcrumbs"
          :key="page.route"
        >
          <BreadcrumbItem>
            <BreadcrumbLink :href="page.route">
              {{ page.title }}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator
            v-if="index !== props.pageBreadcrumbs.length - 1"
          >
            <Slash />
          </BreadcrumbSeparator>
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
