import {clear} from './SessionStorage';
import axios from 'axios';
export default class AuthService {

    static URL = 'http://localhost:8080/auth-service/api/v1'

    static async login(email, password) {

        let body = {
            email: email,
            password: password
        }
    
        let result;

        result = await axios.post(this.URL + "/login", body).then(response => result = response.data).catch((e) => console.log(e))

        return result;
    }

    static async register(user) {

        let result;

        result = await axios.post(this.URL + "/register", user).then(response => result = response.data).catch((e) => console.log(e))

        return result;
    }


    static async refreshToken(refreshToken) {
        // Get new JWT
        // Save response to Session Storage
        // Save refreshToken to Local Stroage
    }

    static logout() {
        clear()
        window.location.href = "./login"
    }
}