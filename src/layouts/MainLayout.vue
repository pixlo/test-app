<template>
  <div class="app-main-layout">
      <NavBar @click="isOpen = !isOpen"/>
      <SideBar v-model="isOpen"/>
    <main class="app-content" :class="{full: !isOpen}">
        <div class="app-page">
            <router-view />
        </div>
    </main>
</div>
</template>

<script>
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'

export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true
  }),
  async mounted () {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
    }
  },
  components: {
    NavBar, SideBar
  }
}
</script>
