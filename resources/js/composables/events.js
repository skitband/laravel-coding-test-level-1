
import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';

export default function useEvents() {
    const events = ref([])
    const router = useRouter()

    const getEvents = async () => {
        let response = await axios.get('api/v1/events')
        events.value = response.data.data;

    }

    return {
        events,
        getEvents
    }
}