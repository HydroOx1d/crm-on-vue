<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>

      <button class="btn waves-effect waves-light btn-small" @click="refreshPage">
        <i class="material-icons">refresh</i>
      </button>
    </div>

    <preloader v-if="preloader"/>

    <div v-else class="row">
      <HomeBudjet :rates="currency.rates"/>
      <HomeCurrency :rates="currency.rates"/>
    </div>
  </div>
</template>

<script>

import HomeBudjet from "../components/HomeBudjet";
import HomeCurrency from "../components/HomeCurrency";
export default {
  name: 'Home',
  components: {HomeCurrency, HomeBudjet},
  data(){
    return {
      preloader: true,
      currency: null
    }
  },
  methods: {
    async refreshPage() {
      this.preloader = true
      this.currency = await this.$store.dispatch('getCurrency')
      this.preloader = false
    }
  },
  async mounted() {
    this.currency = await this.$store.dispatch('getCurrency')
    this.preloader = false
  }
}
</script>
