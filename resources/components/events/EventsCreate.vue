<template>
    <div class="mt-10 sm:mt-0">
        <div class="block">
            <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                    <h3 class="text-lg font-medium leading-6 text-gray-900 font-bold">Event Details</h3>
                </div>
            </div>
            <div class="block mt-3" v-if="errors">
                <div class="bg-red-500 text-white rounded font-bold shadow-lg py-2 px-4 pr-0 mb-1">
                    <div v-for="(v, k) in errors" :key="k">
                        <p v-for="error in v" :key="error" class="text-sm">
                        {{ error }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-2">
                <form @submit.prevent="saveEvent">
                    <div class="py-5 bg-white">
                        <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                                <label for="event-name" class="block text-sm font-medium font-bold text-gray-700">Event name</label>
                                <input v-model="form.name" type="text" name="event-name" id="event-name" autocomplete="false" placeholder="Event Name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label for="slug" class="block text-sm font-medium font-bold text-gray-700">Slug</label>
                                <input v-model="form.slug" type="text" name="slug" id="slug" autocomplete="false" placeholder="Slug (unique)" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                        </div>
                    </div>
                    <div class="mb-5 bg-white">
                        <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                                <label for="startAt" class="block text-sm font-medium font-bold text-gray-700">Start Date</label>
                                <input v-model="form.startAt" type="date" name="startAt" id="startAt" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>

                            <div class="col-span-6 sm:col-span-3">
                                <label for="endAt" class="block text-sm font-medium font-bold text-gray-700">End Date</label>
                                <input v-model="form.endAt" type="date" name="endAt" id="endAt" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                            </div>
                        </div>
                    </div>
                    <div class="text-right mb-3">
                        <button type="submit" class="inline-flex justify-center py-2 px-4 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import useEvents from "../../js/composables/events";
import { reactive } from "vue";

export default ({
    setup() {
        const form = reactive({
            'name': '',
            'slug': '',
            'startAt': '',
            'endAt': '',
        })
        const { errors, storeEvent } = useEvents()
        const saveEvent = async () => {
            await storeEvent({...form});
        }
        return {
            form,
            errors,
            saveEvent
        }
    },
})
</script>
