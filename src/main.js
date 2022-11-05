import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

library.add(faCircleXmark)

createApp(App).mount('#app')
