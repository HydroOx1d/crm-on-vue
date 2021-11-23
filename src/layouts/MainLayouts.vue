<template>
  <preloader v-if="preloader"/>
  <div class="app-main-layout" v-else>
    <Navbar @toggle="onPage = !onPage"/>
    <Sidebar :onPage="onPage"/>



    <main class="app-content" :class="{full: !onPage}">
      <div class="app-page">
        <router-view/>
      </div>
    </main>


    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
export default {
  data() {
    return{
      onPage: true,
      preloader: true
    }
  },
  async mounted() {
    if(!Object.keys(this.$store.getters.userInfo).length) {
      await this.$store.dispatch('getInfo')
    }
    this.preloader = false
  },
  name: "MainLayouts.vue",
  components: {Sidebar, Navbar}
}
</script>

<style scoped>

</style>