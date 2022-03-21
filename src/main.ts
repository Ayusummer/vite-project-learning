import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.less'
import Card from './components/Card.vue'

createApp(App)
    .component('Card', Card)
    .mount('#app')
