<template>
  <nav
    id="navbar"
    class="fixed w-full flex justify-between items-center md:px-20 px-5 h-20 z-20 transition-all duration-500 bg-white/60 backdrop-blur-xl"
  >
    <div class="font-light">
      <a href="/"
        ><span class="font-extrabold">shabiq</span>ghazi<span class="text-xs"
          >.id</span
        ></a
      >
    </div>
    <div id="open-sidebar" class="md:hidden">
      <i class="ri-menu-line text-xl" />
    </div>
    <div
      id="sidebar"
      class="flex flex-col md:flex-row md:justify-end md:items-center gap-8 h-screen fixed md:static top-0 -right-full md:h-fit w-full md:w-fit bg-dark md:bg-transparent md:p-0 px-5 transition-all font-light"
    >
      <div class="flex justify-end items-center h-20 md:hidden">
        <button
          id="close-sidebar"
          class="border border-white h-fit rounded-full flex justify-center items-center w-9 aspect-square"
        >
          <i class="ri-close-large-line" />
        </button>
      </div>
      <NuxtLink to="/" class="nav-link">Home</NuxtLink>
      <NuxtLink to="/about" class="nav-link">About</NuxtLink>
      <NuxtLink to="/articles" class="nav-link">Articles</NuxtLink>
      <NuxtLink to="/gallery" class="nav-link">Gallery</NuxtLink>
      <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
    </div>
  </nav>
</template>
