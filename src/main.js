import { createApp } from 'vue'
import './style.css' // imports styling 
import App from './App.vue' // imports the enrty point to our vue application
import router from './router' //  importing router from router directory

// create thefirst instance of the application
const app = createApp(App);
// you would like your application to use router
app.use(router);
// mount the inctance to the DOM element.
app.mount('#app') 