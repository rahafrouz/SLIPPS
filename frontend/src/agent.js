import _superagent from "superagent";
import superagentPromise from "superagent-promise";

/**
 * Builds a `superagent` request object to get an item by Id
 * NOTE: we're only `building` and returning the object here. We're not firing
 * the request yet. The Middleware will handle that portion
 * @param  {String} id
 * @return {SuperAgent}
 */
const superagent = superagentPromise(_superagent, window.Promise);
let token = null;
const tokenPlugin = req => {
  if (token) {
    req.set("Authorization", `JWT ${token}`);
  }
};
const API_ROOT = "http://slipps.it.lut.fi:8000/api";
// const API_ROOT = "http://localhost:8000/api";
const responseBody = res => res.body;

const requests = {
  // del: url =>
  //   superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  get_without_token: url =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody),
};

const Auth = {
  current: () =>
    requests.get("/auth/user/"),
  login: (email, password) =>
    requests.post("/auth/login/", { email: email, password: password }),
  register: (data) =>
    // requests.post("/users/register", {
    //   email: data.email,
    //   first_name: data.firstName,
    //   last_name: data.lastName,
    //   username: data.email,
    //   password: data.password,
    //   user_account: {
    //     occupation: data.user_account.occupation,
    //     work_place: data.user_account.workPlace,
    //   }
    // })
    superagent.post(`${API_ROOT}/users/register`)
      .set("Content-Type", "application/json")
      .send(data)
      .use(tokenPlugin)
      .then(responseBody),
  save: user =>
    requests.put(`/users/${user.id}`, { user })
};

const Common = {
  getData: () =>
    requests.get_without_token("/init"),
  uploadDoc: (data, filename) =>
    // requests.post("/users/upload", { data: data })
    superagent.put(`${API_ROOT}/users/upload/${filename}`)
      .set("Content-Type", "multipart/form-data")
      .send(data)
      .use(tokenPlugin)
      .then(responseBody),
  getEvent: (eventId) =>
    requests.get(`/event/${eventId}`),
};

const Search = {
  byKeyword(keyword) {
    return requests.get(`/search?kw=${keyword}`);
  },
  advanceSearch(paramsJson) {
    // let params = "keywords_and=" + paramsJson["keywords_and"] + "&keywords_or=" + paramsJson["keywords_or"];
    let paramsStr = "";
    Object.keys(paramsJson).map(function(key) {
      paramsStr += `&${key}=${paramsJson[key]}`;
    });
    console.warn(paramsStr);
    return requests.get(`/advanced-search?${paramsStr}`);
  }
};

export default {
  Common,
  Search,
  Auth,
  setToken: _token => { token = _token; }
};
