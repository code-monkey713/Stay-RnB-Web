import React, { useState } from "react";

export const ListingCard = ({ listings }) => {
  return (
    <div className="row d-flex justify-content-center my-3">
      <div className="col-6 cardContainer">
        <div className="row my-3 display">
          <div className="col">
            <img
              className="listingImage w-100 mx-3"
              src={
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              }
            />
          </div>
          <div className="col mx-3">
            <div className="row mb-5">
              <p>{listings.type}</p>
              <p>{listings.name}</p>
              <p>{listings.description}</p>
              <p>
                {listings.numberOfGuests}{" "}
                {listings.numberOfGuests === 1 ? "Guest " : "Guests "}-{" "}
                {listings.bedrooms}{" "}
                {listings.bedrooms === 1 ? "Bedroom " : "Bedrooms "}-{" "}
                {listings.beds} {listings.beds === 1 ? "Bed " : "Beds "}-{" "}
                {listings.bathrooms}{" "}
                {listings.bathrooms === 1 ? "Bath " : "Baths "}
              </p>
              <p>
                Wifi: {listings.wifi} | Free parking: {listings.freeParking} |
                Pets: {listings.pets} | Smoking: {listings.smoking}
              </p>
              <p>${listings.price}/Night</p>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center">
                <button className="btn btn-primary" data-id={listings._id}>View listing</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
