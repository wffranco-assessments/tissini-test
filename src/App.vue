<template>
  <l-user v-if="auth" />
  <l-guest v-else />
</template>

<script>
import { mapGetters } from 'vuex';
import LGuest from '@/layouts/Guest';
import LUser from '@/layouts/User';

export default {
  name: 'App',

  components: {
    LGuest,
    LUser,
  },

  computed: {
    ...mapGetters(['auth']),
  },

  data: () => ({
    bottomNav: 'cat',
  }),
};
</script>

<style lang="scss">
* {
  font-family: Montserrat, sans-serif;
}
.top-bar.theme--light {
  &.v-sheet,
  .v-btn.v-btn--text {
    color: #f06292;
  }
}
</style>
