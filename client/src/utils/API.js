import axios from "axios";

const API = {
  // get all listings
  getListings: () => {
    return axios.get(`/api/listings`);
  },

  postListing: (listingData) => {
    return axios.post(`/api/listings`, {data: listingData});
  },

  // delete a listing by ID
  deleteListing: (id) => {
    return axios.delete("/:id" + id);
  },

  // creates new user
  createUser: (userData) => {
    return axios.post(`/api/users`, {data: userData});
  },

  login: (userData) => {
    return axios.post(`/api/users/login`, {data: userData});
  },

  logout: () => {
    return axios.post(`/api/users/logout`);
  }
};

export default API;
