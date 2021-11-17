<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import MainLayouts from "./layouts/MainLayouts";
import LogReg from "./layouts/LogRegLayouts";
export default {
  components: {
    MainLayouts,LogReg
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || 'logReg')
    }
  },
}
</script>
<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>

