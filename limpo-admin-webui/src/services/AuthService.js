import {clear} from './SessionStorage';
export default class AuthService{

    static URL = 'http://localhost:8080/auth-service/api/v1/'

    static async login(email,password){
        // Make a call to the API
        // Save jwt to Session Storage
        // Save refreshToken to Local Stroage
    }

    static async refreshToken (refreshToken){
        // Get new JWT
        // Save response to Session Storage
        // Save refreshToken to Local Stroage
    }
    
    static logout(){
        clear()
        window.location.reload()
    }
}