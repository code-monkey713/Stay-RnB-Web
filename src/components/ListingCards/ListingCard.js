import React, { useState } from "react";

export const ListingCard = (props) => {
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
              <p>Entire Home in Houston</p>
              <p>Exotic Getaway in Houston</p>
              <p>6 guests - 4 bedrooms - 3 beds - 1 bath</p>
              <p>Wifi - Free parking - Pets - Smoking</p>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center">
                <button className="btn btn-primary">View listing</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
