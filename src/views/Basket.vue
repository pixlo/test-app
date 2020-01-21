<template>
    <div>
        <div class="page-title">
            <h3>Избранное</h3>
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
  name: 'basket',
  components: {
    CatalogItem
  },
  computed: {
    items () {
      let ids = this.favorites
      return this.catalog.filter(elm => ids.some(id => elm.id === id))
    }
  },
  data: () => ({
    catalog: {},
    loading: true,
    favorites: []
  }),
  async mounted () {
    this.catalog = await this.$store.dispatch('fetchCatalog')
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
