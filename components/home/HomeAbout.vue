<template>
  <div
    class="h-screen bg-neutral-50 grid grid-cols-1 md:grid-cols-2 items-center px-5 md:px-20 gap-20 relative overflow-clip"
  >
    <div class="flex flex-col pb-56 md:pb-0 gap-8 font-light z-10">
      <p class="text-lg font-mono">Hi, Friends!</p>
      <p class="leading-loose font-mono">
        I'm a <strong class="font-semibold">software developer</strong> with
        <strong class="font-semibold">2+ years of experience</strong> who able to use
        <strong class="font-semibold">variative tools and technologies</strong>,
        expecially in Javascript, PHP, and Python Frameworks. I have ability to
        <strong class="font-semibold">learn quickly</strong> and
        <strong class="font-semibold">collaborate</strong> in teams.
      </p>
      <div>
        <NuxtLink href="/about">
          <Button
            variant="default"
            size="lg"
            class="flex gap-2 hover:gap-3 hover:cursor-pointer hover:bg-green-300 hover:text-black border border-black transition-all duration-200"
          >
            <span>More About Me</span>
          </Button>
        </NuxtLink>
      </div>
    </div>
    <div class="absolute md:static -right-4 bottom-20 flex flex-col items-center">
      <img :src="homeAbout" alt="" class="w-96" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import homeAbout from "~/assets/images/undraw_hello_ccwj.svg";
</script>

<style></style>
