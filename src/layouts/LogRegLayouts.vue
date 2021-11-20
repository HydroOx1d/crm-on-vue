<template>
<div class="grey darken-1 empty-layout">
  <router-view/>
</div>
</template>

<script>
import messages from '../utilites/queryParams'
export default {
  name: "LogReg.vue",
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(fbErr) {
      console.log(fbErr)
      this.$message(messages[fbErr.code] || 'Что то пошло не так')
    }
  }
}
</script>

<style scoped>

</style>