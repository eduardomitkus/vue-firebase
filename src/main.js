import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app = ''
const config = {
  apiKey: "AIzaSyBqnwJifr58ONTN8gf64eUGTlaY5I1sPdk",
  authDomain: "vue-firebase-tutorial-35669.firebaseapp.com",
  databaseURL: "https://vue-firebase-tutorial-35669.firebaseio.com",
  projectId: "vue-firebase-tutorial-35669",
  storageBucket: "vue-firebase-tutorial-35669.appspot.com",
  messagingSenderId: "322832518270"  
}

firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
    
  }
})

