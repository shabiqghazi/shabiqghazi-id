<template>
  <section
    id="home-articles"
    class="flex flex-col items-center px-5 md:px-20 py-20 gap-20 justify-center"
  >
    <h2 class="font-bold text-4xl text-center">Recent Articles</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <HomeArticleCard v-for="i in [1, 2, 3]" :key="i" />
    </div>
    <NuxtLink href="/articles">
      <Button
        variant="default"
        size="lg"
        class="flex gap-2 hover:gap-3 hover:cursor-pointer hover:bg-green-300 hover:text-black border border-black transition-all duration-200"
      >
        <span>More Articles</span>
      </Button>
    </NuxtLink>
  </section>
</template>

<style></style>
