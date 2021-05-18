import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { ListingCard } from "../components/ListingCards";


export const Listing = () => {
  const [search, setSearch] = useState("");

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

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
            onChange={handleChange}
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
      <ListingCard />
      <ListingCard />
    </>
  );
};
