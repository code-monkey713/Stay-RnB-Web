import axios from "axios";
const herokuUri = "https://stay-rnb-server.herokuapp.com";
const localAPIServer = "http://localhost:3001";

const API = {
  // get all listings
  getListings: () => {
    return axios.get(`${localAPIServer}/api/listings`);
  },

  postListing: () => {
    return axios.post(`${herokuUri}/api/listings`);
  },

  // delete a listing by ID
  deleteListing: (id) => {
    return axios.delete("/:id" + id);
  },

  // creates new user
  createUser: (userData) => {
    return axios.post(`${localAPIServer}/api/users`, {data: userData});
  },

  login: (userData) => {
    return axios.post(`${localAPIServer}/api/users/login`, {data: userData});
  },

<<<<<<< HEAD
  logout: () => {
    return axios.post(`${localAPIServer}/api/users/logout`);
  }
=======
  // login for users
  userLogin: (userInfo) => {
    return axios.post('/api/users/login', userInfo);
  },


>>>>>>> bdb253d5206207ff32b034e2528083d0fd234562
};

export default API;
