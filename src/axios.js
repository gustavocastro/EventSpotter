import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://app.ticketmaster.com/discovery/v2/'
})

export default instance