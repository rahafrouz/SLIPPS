import request from "superagent";
/**
 * Builds a `superagent` request object to get an item by Id
 * NOTE: we're only `building` and returning the object here. We're not firing
 * the request yet. The Middleware will handle that portion
 * @param  {String} id
 * @return {SuperAgent}
 */
class SearchApi {
  searchByKeyword(kw) {
    return (
      request
        .get("/api/search")
        .query({ "kw": kw }) // query string
    );
  }
}

export default SearchApi;

