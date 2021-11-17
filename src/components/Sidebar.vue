<template>
  <ul class="sidenav app-sidenav open">
    <router-link
      tag="li"
      v-for="link of links"
      :key="link.link"
      :to="link.link"
      :exact="link.exact"
      active-class="active"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{ link.name }}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      links: [
        {
          name: 'Счёт',
          link: '/',
          exact: true
        },
        {
          name: 'История',
          link: '/history',
        },
        {
          name: 'Планирование',
          link: '/planning',
        },
        {
          name: 'Новая запись',
          link: '/record',
        },
        {
          name: 'Категории',
          link: '/categories',
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>