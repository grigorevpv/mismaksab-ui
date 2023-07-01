import axios from "axios";


const SEARCH_MATHCES_LIMIT = 3;

export default class SearchService {
    static async getMatches(value: string) { //value is search input text value
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts?userId='+value, {
                params: {
                    _limit: SEARCH_MATHCES_LIMIT,
                }
            });
            return response;
        } catch (e) {
            console.log(e);
        }
    }
}