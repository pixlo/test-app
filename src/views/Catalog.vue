<template>
    <div>
        <div class="page-title">
            <h3>Люди</h3>
        </div>
        <section>
            <Loader v-if="loading"/>
            <div v-else class="row">
                <CatalogItem v-for="item in items"
                    :key='item.id'
                    :item='item'
                    :favorites='favorites'
                    @setSelectedItem="splitItem"/>
            </div>
        </section>
    </div>
</template>

<script>
import CatalogItem from '@/components/CatalogItem'

export default {
  name: 'catalog',
  components: {
    CatalogItem
  },
  data: () => ({
    loading: true,
    items: {},
    favorites: []
  }),
  async mounted () {
    this.items = await this.$store.dispatch('fetchCatalog')
    this.favorites = await this.$store.dispatch('fetchData')
    this.loading = false
  },
  methods: {
    async splitItem (elm) {
      let arr = []
      if (!this.favorites.some(id => id === elm)) {
        this.favorites.push(elm)
        this.$message('Добавленно в избранное')
      } else {
        arr = this.favorites.filter(id => id !== elm)
        this.favorites = arr
        this.$message('Убранно из избранного')
      }
      try {
        await this.$store.dispatch('addData', this.favorites)
      } catch (e) {}
    }
  }
}
</script>
