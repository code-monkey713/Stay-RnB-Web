import React from "react";

export const AddListing = () => {
  return (
    <>
      <h1 className="text-center mb-3">Add a listing!</h1>

      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <form id="listingForm">
            <div class="input-group mb-3">
              <span class="input-group-text">Listing Name</span>
              <input
                type="text"
                class="form-control"
                placeholder='"The Getaway"'
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Street Address</span>
              <input
                type="text"
                class="form-control"
                placeholder="12345 Random Street Dr"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Zip Code</span>
              <input
                type="Number"
                class="form-control"
                placeholder="77777"
                min="10000"
                max="99999"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">City, State</span>
              <input
                type="text"
                class="form-control"
                placeholder="Houston, Tx"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Type</span>
              <input
                type="text"
                class="form-control"
                placeholder="Apartment, Home, etc"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Bedrooms</span>
              <select name="bedrooms" id="bedrooms">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Beds</span>
              <select name="beds" id="beds">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Bathrooms</span>
              <select name="baths" id="baths">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Pets</span>
              <select name="pets" id="pets">
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Smoking</span>
              <select name="smoking" id="smoking">
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">Number of Guests</span>
              <select name="guests" id="guests">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center">
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
