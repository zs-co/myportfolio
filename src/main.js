import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vClickOutside from 'v-click-outside'

// import NProgress from 'vue-nprogress'

library.add(fas, fab)

// const nprogress = new NProgress(options)

createApp(App)
    .use(router)
    // .use(nprogress)
    .use(vClickOutside)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

