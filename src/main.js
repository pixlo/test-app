import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import messagePlugin from '@/common/message.plugin.js'
import Loader from '@/components/Loader'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min.js'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(messagePlugin)

Vue.use(Vuelidate)
Vue.component('Loader', Loader)

const firebaseConfig = {
  apiKey: 'AIzaSyDVismptuH0zcr5bzsWUmee7HjvCEaVOeg',
  authDomain: 'test-db-6f90b.firebaseapp.com',
  databaseURL: 'https://test-db-6f90b.firebaseio.com',
  projectId: 'test-db-6f90b',
  storageBucket: 'test-db-6f90b.appspot.com',
  messagingSenderId: '812751628720',
  appId: '1:812751628720:web:f71ac1adbb4fd1feee0e75'
}
firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
