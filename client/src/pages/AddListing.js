import React, { useState, useEffect } from "react";
import API from "../utils/API";

export const AddListing = () => {
  const [listingForm, setListingForm] = useState({
    name: "",
    description: "",
    zip: null,
    address: "",
    city: "",
    state: "",
    available: true,
    type: "",
    price: null,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
    pets: "No",
    smoking: "No",
    numberOfGuests: 1,
    thumbnail: "",
    wifi: "No",
    freeParking: "No",
  });
  const [characterCount, setCharacterCount] = useState(0);

  const postListing = async (event) => {
    try {
      event.preventDefault();
      await API.postListing(listingForm);
      window.location.pathname = "/profile";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1 className="text-center mb-3">Add a listing!</h1>

      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <form id="listingForm">
            <div className="input-group mb-3">
              <span className="input-group-text">Listing Name</span>
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder='"The Getaway"'
                onChange={({ target }) =>
                  setListingForm({ ...listingForm, name: target.value })
                }
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">
                Quick Description <br /> {characterCount}/150
              </span>
              <textarea
                onChange={({ target }) => {
                  setListingForm({ ...listingForm, description: target.value });
                  setCharacterCount(target.value.length)
                }}
                maxLength="150"
                cols="50"
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">Street Address</span>
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="12345 Random Street Dr"
                onChange={({ target }) =>
                  setListingForm({ ...listingForm, address: target.value })
                }
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Zip Code</span>
              <input
                type="Number"
                className="form-control"
                placeholder="77777"
                min="10000"
                max="99999"
                onChange={({ target }) =>
                  setListingForm({ ...listingForm, zip: target.value })
                }
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">City</span>
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="Houston"
                onChange={({ target }) =>
                  setListingForm({ ...listingForm, city: target.value })
                }
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">State</span>
              <select
                name="state"
                id="state"
                onChange={({ target }) =>
                  setListingForm({ ...listingForm, state: target.value })
                }
              >
                <option value="" defaultValue="selected">
                  Select a State
                </option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Type</span>
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="Apartment, Home, etc"
                onChange={({ target }) =>
                  setListingForm({ ...listingForm, type: target.value })
                }
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Price/Night</span>
              <input
                type="number"
                className="form-control"
                placeholder="100.00"
                onChange={({ target }) =>
                  setListingForm({ ...listingForm, price: target.value })
                }
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Bedrooms</span>
              <select
                name="bedrooms"
                id="bedrooms"
                onChange={({ target }) =>
                  setListingForm({ ...listingForm, bedrooms: target.value })
                }
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Beds</span>
              <select
                name="beds"
                id="beds"
                onChange={({ target }) =>
                  setListingForm({ ...listingForm, beds: target.value })
                }
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Bathrooms</span>
              <select
                name="baths"
                id="baths"
                onChange={({ target }) =>
                  setListingForm({ ...listingForm, bathrooms: target.value })
                }
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">Number of Guests</span>
              <select
                name="guests"
                id="guests"
                onChange={({ target }) =>
                  setListingForm({ ...listingForm, guests: target.value })
                }
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberCheck"
                onClick={() => {
                  listingForm.pets === "No"
                    ? setListingForm({ ...listingForm, pets: "Yes" })
                    : setListingForm({ ...listingForm, pets: "No" });
                }}
              />
              <label htmlFor="rememberCheck" className="mx-2 mb-2 fs-6">
                Pets
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberCheck"
                onClick={() => {
                  listingForm.smoking === "No"
                    ? setListingForm({ ...listingForm, smoking: "Yes" })
                    : setListingForm({ ...listingForm, smoking: "No" });
                }}
              />
              <label htmlFor="rememberCheck" className="mx-2 mb-2 fs-6">
                Smoking
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberCheck"
                onClick={() => {
                  listingForm.wifi === "No"
                    ? setListingForm({ ...listingForm, wifi: "Yes" })
                    : setListingForm({ ...listingForm, wifi: "No" });
                }}
              />
              <label htmlFor="rememberCheck" className="mx-2 mb-2 fs-6">
                Wifi
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberCheck"
                onClick={() => {
                  listingForm.freeParking === "No"
                    ? setListingForm({ ...listingForm, freeParking: "Yes" })
                    : setListingForm({ ...listingForm, freeParking: "No" });
                }}
              />
              <label htmlFor="rememberCheck" className="mx-2 mb-2 fs-6">
                Free Parking
              </label>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center">
                <button
                  className="btn btn-primary"
                  onClick={postListing}
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
