<template>
        <div class="col s6 m3">
        <div class="card red">
          <div class="card-content ">
            <img :src=item.avatar>
          </div>
          <div class="card-content white-text">
            <p>Имя: {{item.first_name}}</p>
            <p>Фамилия: {{item.last_name}}</p>
            <p>E-mail: {{item.email}}</p>
          </div>
          <a href="#" @click.prevent="onClick(item.id)"><i class="material-icons white-text">{{favorite}}</i></a>
        </div>
      </div>
</template>

<script>
export default {
  props: ['item', 'favorites'],
  computed: {
    favorite () {
      if (this.favorites) {
        return this.favorites.some(id => id === this.item.id) ? 'favorite' : 'favorite_border'
      } else {
        return 'favorite_border'
      }
    }
  },
  methods: {
    onClick (elm) {
      this.$emit('setSelectedItem', elm)
    }
  }
}
</script>
