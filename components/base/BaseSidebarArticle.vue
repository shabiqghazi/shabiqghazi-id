<template>
  <Card class="py-0 overflow-clip border-0 shadow flex flex-row gap-0 h-full">
    <img :src="homeAboutImg" alt="" class="h-28 aspect-square object-cover" />
    <div class="flex flex-col gap-3 grow px-2 py-2">
      <CardContent class="gap-2 flex flex-col px-0">
        <p class="text-xs">July 11th, 2025</p>
        <NuxtLink href="/articles/1">
          <h3 class="font-bold text-sm line-clamp-2">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </NuxtLink>
      </CardContent>
    </div>
  </Card>
</template>
<script setup lang="ts">
import Card from "../ui/card/Card.vue";
import homeAboutImg from "~/assets/images/home-about.webp";
import CardFooter from "../ui/card/CardFooter.vue";
import Button from "../ui/button/Button.vue";
import { ArrowRight } from "lucide-vue-next";
</script>

<style></style>
