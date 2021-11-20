<template>
  <form class="card auth-card" @submit.prevent="submit">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{invalid: (v$.email.$invalid)}"
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
      <div class="input-field">
        <input
            id="name"
            type="text"
            v-model="name"
            :class="{invalid: v$.name.$invalid}"
        >
        <label for="name">Имя</label>
        <small v-if="v$.name.$invalid" class="helper-text invalid">Введите имя</small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree"/>
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import {useVuelidate} from "@vuelidate/core";
import {email, minLength, required} from "@vuelidate/validators";

export default {
  name: "Sign",
  data() {
    return {
      email: '',
      password: '',
      name: '',
      agree: false
    }
  },
  setup: () => ({v$: useVuelidate()}),
  validations() {
    return {
      email: {email, required},
      password: {required, minLength: minLength(8)},
      name: {name, required},
      agree: {
        agree: v => v
      }
    }
  },
  methods: {
    async submit() {
      if(this.v$.$invalid) {
        this.v$.$touch()
        return
      }

      const signData = {
        email: this.email,
        password: this.password,
        name: this.name
      }
      try {
        await this.$store.dispatch('register', signData)
        this.$router.push('/')
      }catch (e){}
    }
  }
}
</script>

<style scoped>

</style>