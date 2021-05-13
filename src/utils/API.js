import axios from 'axios';

export default {
  // get all listings
  getListings: () => {
    return axios.get('/api/listings');
  },

  // delete a listing by ID
  deleteListing: (id) => {
    return axios.delete('/:id' + id);
  },

  // creates new user
  createUser: (userData) => {
    return axios.post('/api/users', userData);
  },
};
