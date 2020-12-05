import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://app.ticketmaster.com/discovery/v2/'
})

instance.interceptors.request.use((config) => {
    config.params = config.params || {}
    config.params['apikey'] = process.env.REACT_APP_TICKET_MASTER_TOKEN
    return config
})

export default instance