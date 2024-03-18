import axios from 'axios';

const client = axios.create({
baseURL: 'https://api.outsidein.dev/6ACNACXuX9efG9zr7c9sUMvIbpLnJciR',
});

const api = {
    async loadRestaurants() {
        const response = await client.get('/restaurants');
        return response.data;
    },
};

export default api;