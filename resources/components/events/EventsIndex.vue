<template>
    <div class="row">
        <div class="flex justify-end mb-4">
            <div class="px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150    ">
                <router-link :to="{ name: 'events.create' }" class="text-sm font-medium">Create New Event</router-link>
            </div>
        </div>
        <div class="block my-2.5 mx-2.5" v-if="this.$route.params.msg">
            <div class="bg-green-500 text-white rounded font-bold shadow-lg py-2 px-4 pr-0 mb-1">
                {{ this.$route.params.msg }}
            </div>
        </div>
        
        <table class="w-full border-separate border-spacing-2 text-left border-slate-500 divide-gray-200">
                <thead>
                <tr>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                        <span
                            class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Event Name</span>
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                        <span
                            class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Event Slug</span>
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                        <span
                            class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Event Start Date</span>
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                        <span
                            class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Event End Date</span>
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                    </th>
                </tr>
                </thead>

                <tbody class="bg-white divide-y divide-gray-200 divide-solid">
                <template v-for="event in events" :key="event.id">
                    <tr class="bg-white">
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                            {{ event.name }}
                        </td>
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                            {{ event.slug }}
                        </td>
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                            {{ event.startAt }}
                        </td>
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                            {{ event.endAt }}
                        </td>
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap">
                            <router-link :to="{ name: 'events.edit', params: { id: event.id } }"
                                     class="mr-2 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                            Edit
                            </router-link>
                            <button
                                    class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150" @click="deleteEvent(event.id)">
                            Delete</button>
                        </td>
                    </tr>
                </template>
                </tbody>
        </table>
    </div>
</template>

<script>
import useEvents from "../../js/composables/events";
import { onMounted } from "vue";

export default ({
    setup() {
        const { events, getEvents, destroyEvents } = useEvents()

        onMounted(getEvents)

        const deleteEvent = async (id) => {
            if(!window.confirm('Are you sure?')){
                return;
            }

            await destroyEvents(id);
            await getEvents();
            console.log('The id is: ' + this.$route.params.msg);
        }

        return {
            events,
            deleteEvent,
        }
    },
})
</script>
