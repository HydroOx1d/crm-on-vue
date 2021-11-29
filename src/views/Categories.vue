<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <preloader v-if="loading"/>
      <div class="row" v-else>
        <CategoryCreate @createdCategory="createdCategory"/>
        <CategoryEdit :allCategories="allCategories" @update="updateCategory" :key="allCategories.length + updateCount"/>
      </div>
    </section>
  </div>
</template>

<script>
import CategoryCreate from "../components/CategoryCreate";
import CategoryEdit from "../components/CategoryEdit";
export default {
  name: "Categories",
  components: {CategoryEdit, CategoryCreate},
  data() {
    return {
      allCategories: [],
      loading: true,
      updateCount: 0
    }
  },
  async mounted() {
    this.allCategories = await this.$store.dispatch('getCategories')
    this.loading = false
  },
  methods: {
    createdCategory(category) {
      this.allCategories.push(category)
    },
    updateCategory(category) {
      const idx = this.allCategories.findIndex(cat => cat.id === category.id)
      this.allCategories[idx].title = category.title
      this.allCategories[idx].limit = category.limit
      this.updateCount++
    }
  }
}
</script>

<style scoped>

</style>