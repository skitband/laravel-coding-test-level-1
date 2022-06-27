import { createRouter, createWebHistory } from "vue-router";

import EventsIndex from '../../components/events/EventsIndex'

const routes = [
    {
        path: '/dashboard',
        name: 'events.index',
        component: EventsIndex
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})