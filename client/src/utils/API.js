import axios from "axios";

const API = {
  // get listings by zip
  getListings: (zip) => {
    return axios.get(`/api/listings/:zip`, { params: { zip: zip } });
  },

  // create listing
  postListing: (listingData) => {
    return axios.post(`/api/listings`, { data: listingData });
  },

  // delete a listing by ID
  deleteListing: (id) => {
    return axios.delete("/:id" + id);
  },

  // gets user by id
  getUser: () => {
    return axios.get("/api/users");
  },

  // creates new user
  createUser: (userData) => {
    return axios.post(`/api/users`, { data: userData });
  },

  // logs user in
  login: (userData) => {
    return axios.post(`/api/users/login`, { data: userData });
  },

  // logs user out
  logout: () => {
    return axios.post(`/api/users/logout`);
  },
};

export default API;
