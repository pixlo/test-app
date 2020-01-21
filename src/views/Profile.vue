<template>
  <div>
    <div class="page-title">
 <h3>Профиль</h3>
 </div>
 <form class="form">
 <div class="input-field">
 <input
 id="description"
 type="text"
 >
 <label for="description">{{name}}</label>
 <span
 class="helper-text invalid">name</span>
 </div>
 <button class="btn waves-effect waves-light" type="submit">
 Обновить
 <i class="material-icons right">send</i>
 </button>
 </form>
</div>
</template>

<script>
import M from 'materialize-css'
export default {
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    }
  },
  computed: {
    name () {
      return this.$store.getters.info.name
    }
  },
  mounted () {
    M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true
    })
  }
}
</script>
