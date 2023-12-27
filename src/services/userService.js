import axios from "axios";
export default class UserService{
    getUserService(){
        return axios.get("https://jsonplaceholder.typicode.com/users")
    }
}