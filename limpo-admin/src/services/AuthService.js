import {clear} from './SessionStorage';
export default class AuthService{

    static async login(){

    }

    static logout(){
        clear()
        window.location.reload()
    }
}