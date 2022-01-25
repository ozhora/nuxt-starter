<template>
  <div class="">
    <div class="container">
      <div class="col-md-12 mt-5">
        <h1 class="font-weight-bold">Login</h1>
        <form action="#" @submit.prevent="submitForm">
          <label for="">Email</label>
          <input v-model="login.email" type="text" class="form-control" :class="{ 'is-invalid': typesubmit && $v.login.email.$error }">
          <div v-if="typesubmit && $v.login.email.$error" class="invalid-feedback">
            <span v-if="!$v.login.email.required">Alamat Email/Nama Pengguna tidak boleh kosong</span>
            <span v-if="!$v.login.email.minLength">Alamat Email/Nama Pengguna harus terdiri dari 6 karakter</span>
          </div>
          <label for="">Password</label>
          <input v-model="login.password" type="password" class="form-control" :class="{ 'is-invalid': typesubmit && $v.login.password.$error }">
          <div v-if="typesubmit && $v.login.password.$error" class="invalid-feedback" >
            <span v-if="!$v.login.password.required">Password tidak boleh kosong</span>
            <span v-if="!$v.login.password.minLength">Password harus terdiri dari 8 karakter</span>
          </div>
          <button class="btn btn-success mt-3">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'IndexPage',
  data() {
    return {
      login: {
        email: '',
        password: '',
        is_staff: true,
      },
      typesubmit: false,
    }
  },
  validations: {
    login: {
      email: {
        required,
        minLength: minLength(6)
      },
      password: {
        required,
        minLength: minLength(8)
      }
    },
  },
  methods: {
    async submitForm(e) {
      this.typesubmit = true
      this.$v.$touch()
      if(!this.$v.$invalid) {
        this.$nuxt.$loading.start()
        try {
          console.log('submit')
          await this.$auth.loginWith('local', { data: this.login })
          .then((response) => {
            console.log(response)
            this.$auth.setUser(response.data.data)
            if(this.last_seen === '' || this.last_seen === null) {
              this.$router.push('/')
            } else {
              console.log(this.last_seen)
              this.$router.push(this.last_seen)
            }
          })
          .catch(({response}) => {
            // if(!response.data.status){
            //   this.error_status = true
            //   this.error_message = response.data.data.result
            // }
            console.log(response)
          })
        } catch(e){
          console.log(e)
        }
      }
    },
  }

}
</script>

<style lang="scss">
  .warna{
    background-color: $warna;
  }
</style>
