<template>
  <v-app>
    <v-card flat tile>
      <v-img
        class="white--text align-center background"
        position="top center"
        src="/img/logos/login-bg.jpg"
      >
        <v-card-title class="justify-center">
          <div class="content text-center">
            <v-img src="/img/logos/logo.png" class="mx-auto mb-4" />
            <p>
              Ingresa el número de teléfono <br />
              de tu asesora independiente.
            </p>
            <form @submit.prevent.stop="submit">
              <v-text-field v-model="phone" label="Teléfono" dark required />
            </form>
          </div>
        </v-card-title>
      </v-img>
    </v-card>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    phone: '',
  }),

  computed: {
    ...mapGetters(['auth']),
  },

  methods: {
    ...mapActions(['singIn']),
    submit() {
      this.singIn(this.phone);
      this.$nextTick(() => {
        if (this.auth) {
          this.$router.push('Home');
        }
      });
    },
  },
};
</script>

<style lang="scss">
.background {
  height: 100vh;
}
.content {
  max-width: 333px;
  .v-image {
    width: 60%;
  }
}
</style>
