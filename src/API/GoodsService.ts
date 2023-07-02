import axios from "axios";


export default class GoodsService {
    static async get(limit = 10) {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?limit='+limit);
            return response;
        } catch (e) {
            console.log(e);
        }
    }
}