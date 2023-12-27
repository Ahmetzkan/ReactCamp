import axios from "axios";
export default class PhotosService{
    getToPhotos(){
        return axios.get("https://jsonplaceholder.typicode.com/photos")
    }
}