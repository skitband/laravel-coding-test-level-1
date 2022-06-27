import './bootstrap';


import { createApp } from "vue";
import router from './router'
import EventsIndex from './../components/events/EventsIndex'

createApp({
    components: {
        EventsIndex
    }
}).use(router).mount('#app')