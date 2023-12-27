import axios from "axios"

export default class ProductService{
    getProducts()
    {
        return axios.get("https://localhost:44362/api/Products/getall")
        
    }
 
    // getByProductName(productName)
    // {
    //     return axios.get("https://localhost:44362/api/Products/getall")
    // }
}