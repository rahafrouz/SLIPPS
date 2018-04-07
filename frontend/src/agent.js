import _superagent from "superagent";
import superagentPromise from "superagent-promise";
// import root from "window-or-global";

/**
 * Builds a `superagent` request object to get an item by Id
 * NOTE: we're only `building` and returning the object here. We're not firing
 * the request yet. The Middleware will handle that portion
 * @param  {String} id
 * @return {SuperAgent}
 */
const superagent = superagentPromise(_superagent, window.Promise);
// const superagent = superagentPromise(_superagent, Promise);

const API_ROOT = "http://157.24.191.55:8000/api";
const responseBody = res => res.body;

const requests = {
  // del: url =>
  //   superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody),
  // put: (url, body) =>
  //   superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  // post: (url, body) =>
  //   superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Search = {
  byKeyword(keyword) {
    return requests.get(`/search?kw=${keyword}`);
    // return (
    //   request
    //     .get(API_ROOT + "/search")
    //     .query({ kw: this.props.match.params.keyword }) // sends a JSON post body
    //     .set("content-type", "json")
    // .end((err, res) => {
    //   this.setState({
    //     testResult: res.body
    //   });
    //   this.forceUpdate();
    // });
    // );
  },
};

export default {
  Search,
};
