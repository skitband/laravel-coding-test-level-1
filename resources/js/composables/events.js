
import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

export default function useEvents() {
    const events = ref([])
    const event = ref([])
    const router = useRouter()
    const errors = ref('')

    const getEvents = async () => {
        let response = await axios.get('api/v1/events')
        events.value = response.data.data;

    }

    const getEvent = async (id) => {
        let response = await axios.get('/api/v1/events/' + id)
        event.value = response.data;
        console.log(response.data) 
    }

    const storeEvent = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/v1/events', data)
            await router.push({name: 'events.index', params: { msg: 'Event created successfully'}})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const updateEvent = async (id) => {
        errors.value = ''
        try {
            await axios.put('/api/v1/events/' + id, event.value)
            await router.push({name: 'events.index', params: { msg: 'Event updated successfully'}})
        } catch (e) {
            if (e.response.status === 422) {
               errors.value = e.response.data.errors
            }
        }
    }

    const destroyEvents = async (id) => {
        await axios.delete('api/v1/events/' + id)
    }

    return {
        events,
        event,
        errors,
        getEvents,
        getEvent,
        storeEvent,
        updateEvent,
        destroyEvents,
        
    }
}