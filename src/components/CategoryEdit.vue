<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Редактировать</h4>
      </div>

      <form @submit.prevent="submit">
        <div class="input-field" >
          <select ref="selects" v-model="current">
            <option v-for="allCat in allCategories" :key="allCat.id" :value="allCat.id">{{ allCat.title }}</option>
          </select>
          <label>Выберите категорию</label>
        </div>

        <div class="input-field">
          <input
              id="name"
              type="text"
              v-model="title"
              :class="{invalid: v$.title.required && v$.title.$invalid}"
          >
          <label for="name">Название</label>
          <span v-if="v$.title.required && v$.title.$invalid" class="helper-text invalid">Введите название</span>
        </div>

        <div class="input-field">
          <input
              id="limit"
              type="number"
              v-model="limit"
              :class="{invalid: v$.limit.minValue && v$.limit.$invalid}"
          >
          <label for="limit">Лимит</label>
          <span v-if="v$.limit.minValue && v$.limit.$invalid" class="helper-text invalid">Минимальная величина</span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          Обновить
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import {useVuelidate} from "@vuelidate/core";
import {minValue, required} from "@vuelidate/validators";

export default {
  name: 'categoryEdit',
  props: {
    allCategories: {
      type: Array,
      required: true
    }
  },
  setup: () => ({v$: useVuelidate()}),
  validations() {
    return {
      title: {required},
      limit: {required, minValue: minValue(10)}
    }
  },
  data() {
    return {
      selects: null,
      current: null,
      title: '',
      limit: 10
    }
  },
  created() {
    const {id, title, limit} = this.allCategories[0]
    this.current = id
    this.title = title
    this.limit = limit
  },
  watch: {
    current(catId) {
      const {title, limit} = this.allCategories.find(cat => cat.id === catId)
      this.title = title
      this.limit = limit
    }
  },
  methods: {
    async submit() {
      if(this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      try{
        const category = {
          title: this.title,
          limit: this.limit,
          id: this.current
        }
        await this.$store.dispatch('updateCategory', category )
        this.$message('Updated!')
        this.$emit('update', category)
      }catch(e){}
    }
  },
  mounted() {
    this.selects = M.FormSelect.init(this.$refs.selects)
    M.updateTextFields()
  },
  destroyed() {
    if(this.selects && this.selects.destroy) {
      this.selects.destroy()
    }
  }
}
</script>