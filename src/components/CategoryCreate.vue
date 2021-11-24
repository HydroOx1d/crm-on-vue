<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>Создать</h4>
      </div>

      <form @submit.prevent="submit">
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
          Создать
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import {required, minValue} from '@vuelidate/validators'
import {useVuelidate} from '@vuelidate/core'

export default {
  data() {
    return {
      title: '',
      limit: 10
    }
  },
  mounted() {
    M.updateTextFields()
  },
  setup: () => ({v$: useVuelidate()}),
  validations() {
    return {
      title: {required},
      limit: {required, minValue: minValue(10)}
    }
  },
  methods: {
    async submit() {
      if(this.v$.$invalid) {
        this.v$.$touch()
        return
      }

      try {
        const category = await this.$store.dispatch('createCategory', {
          title: this.title,
          limit: this.limit
        })
        this.title = ''
        this.limit = 100
        this.v$.$reset()
        this.$message('Категория была создана')
        this.$emit('createdCategory', category)
      } catch(e) {}
    }
  }
}
</script>