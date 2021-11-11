import axios from 'axios'
import AuthService from './AuthService'
export default class OrderService {

    //static URL = 'http://localhost:8080/order-service/api/v1'
    static URL = 'https://api.limpo.bg/order-service/api/v1'

    /**
     * Logout when the API returns 401. 
     * This is due to the jwt expiration time.
     * @returns void
     */
    static logout = () => AuthService.logout()


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
            .catch((error) => error.message.includes("401") ? this.logout() : console.log(error))

        return result;
    }

    static async post(url, body) {
        let result;
        let token = this.getToken()

        result = await axios.post(this.URL + url, body, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            .then(response => result = response.data)
            .catch((error) => error.message.includes("401") ? this.logout() : console.log(error))

        return result;
    }

    static async put(url, body) {
        let result;
        let token = this.getToken()

        result = await axios.put(this.URL + url, body, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            .then(response => result = response.data)
            .catch((error) => error.message.includes("401") ? this.logout() : console.log(error))

        return result;
    }

    static async delete(url) {
        let result;
        let token = this.getToken()

        result = await axios.delete(this.URL + url, {
                headers: {
                    Authorization: "Bearer " + token
                }
            })
            .then(response => result = response.data)
            .catch((error) => error.message.includes("401") ? this.logout() : console.log(error))

        return result;
    }
}