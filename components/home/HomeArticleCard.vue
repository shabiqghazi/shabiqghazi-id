<template>
  <div class="grid-rows-2">
    <Card class="py-0 overflow-clip border-black/50">
      <img :src="homeAboutImg" alt="" class="aspect-video object-cover" />
      <CardContent class="px-3 gap-2 flex flex-col">
        <p class="text-xs text-black/60">July 11th, 2025</p>
        <NuxtLink href="/articles/1">
          <h3 class="font-bold text-sm">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </NuxtLink>
        <p class="text-sm text-black/70 line-clamp-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
          incidunt repellat eveniet, recusandae ut illo.
        </p>
      </CardContent>
      <CardFooter class="px-3 pt-0 pb-3">
        <NuxtLink href="/articles/1">
          <Button
            size="sm"
            class="hover:cursor-pointer hover:bg-green-300 hover:text-black border-black border"
          >
            Read more
          </Button>
        </NuxtLink>
      </CardFooter>
    </Card>
  </div>
</template>
<script setup lang="ts">
import Card from "../ui/card/Card.vue";
import homeAboutImg from "~/assets/images/home-about.webp";
import CardFooter from "../ui/card/CardFooter.vue";
import Button from "../ui/button/Button.vue";
</script>

<style></style>
