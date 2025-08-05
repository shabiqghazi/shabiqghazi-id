<template>
  <div>
    <BaseNavbar />
    <slot />
    <BaseFooter />
  </div>
</template>

<script>
export default {
  name: "DefaultLayout",
};
</script>
