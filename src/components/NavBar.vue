<template>
        <nav class="navbar orange lighten-1">
      <div class="nav-wrapper">
                <div class="navbar-left">
          <a href="#" @click.prevent="$emit('click')">
            <i class="material-icons black-text">dehaze</i>
          </a>
        </div>
        <ul class="right hide-on-small-and-down">
          <li>
            <a
                class="dropdown-trigger black-text"
                href="#"
                data-target="dropdown"
                ref="dropdown"
            >
              {{name}}
              <i class="material-icons right">arrow_drop_down</i>
            </a>

            <ul id='dropdown' class='dropdown-content'>
              <li v-if='!login'>
                <router-link to="/login" class="black-text">
                  <i class="material-icons">account_circle</i>Войти
                </router-link>
              </li>
              <li v-else>
                <a href="#" class="black-text" @click.prevent="logout">
                  <i class="material-icons">assignment_return</i>Выйти
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
import M from 'materialize-css'
export default {
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
      this.$router.push('/')
    }
  },
  computed: {
    name () {
      return this.$store.getters.info.name || 'Гость'
    },
    login () {
      return this.$store.getters.auth
    }
  },
  mounted () {
    M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false
    })
  }
}
</script>
