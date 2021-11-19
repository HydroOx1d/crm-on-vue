<template>
  <div class="app-main-layout">
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
      onPage: true
    }
  },
  name: "MainLayouts.vue",
  components: {Sidebar, Navbar}
}
</script>

<style scoped>

</style>