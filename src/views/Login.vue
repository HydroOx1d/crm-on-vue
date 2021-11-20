<template>
  <form class="card auth-card" @submit.prevent="submit">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{invalid: (v$.email.$invalid && v$.email.required)}"
        >
        <label for="email">Email</label>
        <small v-if="v$.email.$invalid" class="helper-text invalid">Введите Email</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model="password"
            :class="{invalid: v$.password.$invalid}"
        >
        <label for="password">Пароль</label>
        <small v-if="v$.password.$invalid" class="helper-text invalid">Введите пароль (мин. {{ v$.password.minLength.$params.min }} символов)</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/signup">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import {email, required, minLength} from '@vuelidate/validators'
import {useVuelidate} from '@vuelidate/core'
import queryParams from "../utilites/queryParams"
export default {
  name: "Login.vue",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  mounted() {
    if(queryParams[this.$route.query.m]) {
      this.$message(queryParams[this.$route.query.m])
    }
  },
  setup: () => ({v$: useVuelidate()}),
  validations() {
    return {
      email: {email, required},
      password: {required, minLength: minLength(8)}
    }
  },
  methods: {
    async submit() {
      if(this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      const loginData = {
        email: this.email,
        password: this.password
      }
      try {
        await this.$store.dispatch("login", loginData)
        this.$router.push('/')
      } catch (e) {}
    }
  }
}
</script>

<style scoped>

</style>