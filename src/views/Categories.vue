<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">
        <CategoryCreate @createdCategory="createdCategory"/>
        <CategoryEdit/>
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
      allCategories: []
    }
  },
  methods: {
    createdCategory(category) {
      this.allCategories.push(category)
      console.log(this.allCategories)
    }
  }
}
</script>

<style scoped>

</style>