<template>
  <div class="">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div v-if="auth.loggedIn">
            <h2 >Logout</h2>
          </div>
          <div v-else>
            <nuxt-link to="/login">Login</nuxt-link>
          </div>
        </div>
        <div class="col-md-12 mt-5">
          <label for="" class="font-weight-bold">Homepage</label> <br>
          <!-- <nuxt-link to="/login">Login</nuxt-link> -->
          <nuxt-link to="/form">Form</nuxt-link>
          <a href="#" @click="$auth.loginWith('auth0')">Login auth0</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    auth() {
      return this.$store.state.auth
    }
  },
  methods: {
    login() {
      this.$auth.loginWith('auth0')
    }
  }
}
</script>

<style lang="scss">
  .warna{
    background-color: $warna;
  }
</style>
