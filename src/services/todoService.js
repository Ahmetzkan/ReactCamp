import axios from "axios";
export default class ToDoService{
    getTodos(){
        return axios.get("https://jsonplaceholder.typicode.com/todos")
    }
}