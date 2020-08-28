<template>
  <div class="home">
    <v-img
      alt="Tissini Logo"
      contain
      src="/img/tissini.svg"
      transition="scale-transition"
      width="300px"
    />
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss">
.home > .v-image {
  margin: auto;
}
</style>
