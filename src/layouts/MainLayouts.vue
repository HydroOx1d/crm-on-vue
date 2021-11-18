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
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
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