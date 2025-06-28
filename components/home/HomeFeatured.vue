<template>
  <section
    id="home-featured"
    class="relative min-h-screen grid grid-cols-1 md:grid-cols-2 bg-dark py-20 md:px-16 px-5"
  >
    <div id="particles-js" class="absolute top-0 w-full z-0 h-full" />
    <div class="flex flex-col justify-center gap-4 order-2 md:order-1">
      <p class="font-bold text-s-normal md:text-s-large z-10">Hi, there! I'm</p>
      <p class="font-extrabold text-s-large md:text-s-huge z-10">
        Shabiq Ghazi Arkaan
      </p>
    </div>
    <div class="flex justify-center items-center order-1 md:order-2">
      <img
        :src="featuredImage"
        alt="Shabiq Ghazi Arkaan"
        class="w-60 md:w-80 z-10"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import featuredImage from "~/assets/images/hero-image.png";
</script>
