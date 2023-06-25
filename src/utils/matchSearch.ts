import SearchService from "../API/SearchService";

export default async function matchSearch(setSearchResults, value) {
    let results = [];
    value = value.trim();

    if (value != '') {
        results = await SearchService.getMatches(value);
        results = results.data;
    }

    setSearchResults(results);
}