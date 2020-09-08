import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://agtran-test.herokuapp.com`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 1000,
});

export default {
  // getEvents(perPage, page) {
  //   return apiClient.get("/events?_limit=" + perPage + "&_page=" + page);
  // },
  // getEvent(id) {
  //   return apiClient.get("/events/" + id);
  // },
  createUser(user) {
    return apiClient.post("/api/v1/user", user);
  },
  loginUser(user) {
    return apiClient.post("/api/v1/auth/login", user);
  }
};
