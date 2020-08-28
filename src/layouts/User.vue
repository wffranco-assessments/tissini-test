<template>
  <v-app>
    <v-app-bar app color="light-grey" class="top-bar" dense :elevation="1">
      <div class="d-flex align-center">
        <v-img
          alt="Tissini Logo"
          class="shrink mr-2"
          contain
          src="/img/tissini.svg"
          transition="scale-transition"
          width="40"
        />

        <v-toolbar-title>Tissini</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn icon color="primary" href="tel:+57-786-547-0213">
        <v-icon>mdi-phone</v-icon>
      </v-btn>
      <v-btn icon color="primary" target="_blank" text @click="exit">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-bottom-navigation app grow v-model="bottomNav">
      <v-btn value="category">
        <span>Categorías</span>
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>

      <v-btn value="catalog">
        <span>Catálogo</span>
        <v-icon>mdi-badge-account-outline</v-icon>
      </v-btn>

      <v-btn value="car">
        <span>Carrito</span>
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  data: () => ({
    bottomNav: 'category',
  }),

  computed: {
    ...mapState(['auth']),
    ...mapGetters(['isLogged']),
  },

  methods: {
    ...mapActions(['signOut']),
    exit() {
      this.signOut();
      this.$nextTick(() => {
        if (!this.auth) {
          this.$router.push('Home');
        }
      });
    },
  },
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
.v-bottom-navigation .v-btn.v-btn--active {
  color: #f06292 !important;
}
</style>
