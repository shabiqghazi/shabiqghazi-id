<template>
  <aside class="flex flex-col lg:w-sm gap-12">
    <div class="lg:px-8 flex flex-col gap-4">
      <p class="font-bold">Cari Artikel</p>
      <div class="flex w-full items-center gap-1.5">
        <Input
          id="keyword"
          type="text"
          placeholder="Cari..."
          class="rounded-xl border-neutral-400 h-12"
        />
      </div>
    </div>
    <div class="lg:px-8 flex flex-col gap-4">
      <p class="font-bold">Artikel Terbaru</p>
      <base-sidebar-article v-for="value in ['', '', '']" />
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { Input } from "../ui/input";
</script>

<style></style>
