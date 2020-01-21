<template>
    <ul class="sidenav app-sidenav" :class="{open: value}">
      <router-link v-for="link in showLinks"
      :key='link.url'
      tag='li'
      active-class='active'
      :to='link.url'
      :exact='link.exact'
      >
        <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
      </router-link>
    </ul>
</template>

<script>
export default {
  props: ['value'],
  computed: {
    showLinks () {
      return !this.$store.getters.auth ? this.links.filter(el => !el.login) : this.links
    }
  },
  data: () => ({
    links: [
      { title: 'Главная', url: '/', exact: true },
      { title: 'Каталог', url: '/catalog' },
      { title: 'Избранное', url: '/basket', login: true }
    ]
  })
}
</script>
