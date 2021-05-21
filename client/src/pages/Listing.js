import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { ListingCard } from "../components/ListingCards";
import API from '../utils/API';


export const Listing = () => {
  const [zip, setZip] = useState(0);
  const [listings, setListings] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {data} = await API.getListings(zip);
      setListings(data);
    } catch(err) {
      console.log(err)
    }
  };

  // useEffect(() => {
  // },[zip])

  return (
    <>
      <div>
        <h1 className="text-center mb-3">Find your Room and Board today!</h1>
      </div>
      <form className="mb-3">
        <div className="input-group d-flex justify-content-center">
          <input
            className="col-6 search"
            type="text"
            id="searchInput"
            placeholder="Enter your destination zip code"
            onChange={({target}) => setZip(parseInt(target.value))}
          />
          <div className="input-group-append">
            <button
              type="submit"
              className="btn btn-outline-secondary"
              onClick={handleSubmit}
            >
              <FontAwesomeIcon icon={faSearchLocation} size="lg" />
            </button>
          </div>
        </div>
      </form>
      {listings?.map(listing => (
        <ListingCard key={listing._id} listings={listing} />
      ))}
    </>
  );
};
