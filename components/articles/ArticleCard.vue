<template>
    <Card
      class="py-0 overflow-clip border-0 shadow flex flex-col gap-3 h-full"
    >
      <img
        :src="homeAboutImg"
        alt=""
        class="aspect-video object-cover"
      />
      <div class="flex flex-col gap-3 ">
        <CardContent class="px-3 gap-2 flex flex-col ">
          <p class="text-xs">July 11th, 2025</p>
          <NuxtLink href="/articles/1">
            <h3 class="font-bold text-sm">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </NuxtLink>
          <p class="text-sm line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            suscipit. Quae impedit, nihil, doloribus optio eaque nisi ad
            voluptatum id debitis iure beatae. Repellat commodi quis animi
            blanditiis doloribus reiciendis ipsam optio accusantium recusandae
            sequi nostrum debitis cumque dolore est ipsum similique
            exercitationem consequuntur, pariatur qui minima? Omnis, eligendi
            pariatur molestias animi nesciunt necessitatibus aperiam. Quas,
            accusamus autem quam hic quos et velit repellendus aliquam aperiam
            provident maiores quis dolores distinctio doloremque quia similique
            fugiat ut, totam delectus est explicabo praesentium consectetur.
            Harum a similique tenetur cum mollitia dignissimos, aperiam,
            deserunt maiores perferendis consectetur vero temporibus suscipit
            quia quis corrupti.
          </p>
        </CardContent>
        <CardFooter class="px-0 pt-0 pb-3">
          <NuxtLink href="/articles/1" class="">
            <Button
              size="sm"
              variant="link"
              class="hover:cursor-pointer hover:text-green-400 text-green-500 text-xs h-fit py-1 flex hover:gap-2 items-center"
            >
              <span> Read more </span>
              <ArrowRight :size="12" />
            </Button>
          </NuxtLink>
        </CardFooter>
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
