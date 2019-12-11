import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://app.ticketmaster.com/discovery/v2/'
})

instance.interceptors.request.use((config) => {
    config.params = config.params || {}
    config.params['apikey'] = 'vR2G50X7zf89GygjFjAy4vnKIiudkClW'
    return config
})

export default instance