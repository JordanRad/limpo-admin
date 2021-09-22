import axios from 'axios'
export default class OrderService {

    static URL = 'http://localhost:8080/order-service/api/v1'


    static getToken = () => {
        let user = JSON.parse(sessionStorage.getItem("user"))

        return user.token
    }
    static async get(url) {

        let result;

        let token = this.getToken()

        result = await axios.get(this.URL + url, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            .then(response => result = response.data)
            .catch((e) => console.log(e))

        return result;
    }

    static post(url, body) {
        axios.post()
    }

    static put(url, body) {
        axios.put()
    }

    static delete(url) {
        axios.delete()
    }
}