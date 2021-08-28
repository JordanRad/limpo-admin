import axios from 'axios'
export default class OrderService {

    static URL = 'http://localhost:8080/order-service/api/v1/'

    static get(url, header) {
        axios.get()
    }

    static post(url, header, body) {
        axios.post()
    }

    static put(url, header, body) {
        axios.put()
    }

    static delete(url, header) {
        axios.delete()
    }
}