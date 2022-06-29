import { createRouter, createWebHistory } from "vue-router";

import EventsIndex from '../../components/events/EventsIndex'
import EventsCreate from '../../components/events/EventsCreate'
import EventsEdit from '../../components/events/EventsEdit'

const routes = [
    {
        path: '/dashboard',
        name: 'events.index',
        component: EventsIndex
    },
    {
        path: '/events/create',
        name: 'events.create',
        component: EventsCreate,
    },
    {
        path: '/events/:id/edit',
        name: 'events.edit',
        component: EventsEdit,
        props: true,
    },
]

export default createRouter({
    history: createWebHistory(),
    routes
})