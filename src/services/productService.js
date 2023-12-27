import axios from "axios"

export default class ProductService{
    getProduct()
    {
        return axios.get("")
        //http://localhost:44362/api/Products?PageIndex=0&PageSize=30
    }
 
    getByProductName(productName)
    {
        return axios.get("")
        //http://localhost:5231/api/Products/getbyid?id=" + productId
    }
}