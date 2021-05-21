import React from "react";
import Man from "../../assets/Man.jpg";
import { HostListingCard } from "../../components/ListingCards/HostListingCard";
import { Link } from "react-router-dom";

export const HostProfile = () => {
  return (
    <>
      <div className="row profileContainer">
        <div className="col d-flex justify-content-center align-items-center">
          <img src={Man} className="img-fluid userImage" />
        </div>
        <div className="col">
          <div className="row">
            <h1>Host Profile</h1>
            <p className="fs-5">First Name: Foo</p>
            <p className="fs-5">Last Name: Bar</p>
            <p className="fs-5">Email Address: FooBar@email.com</p>
            <p className="fs-5">Phone Number: 123-456-7890</p>
            <p className="fs-5">
              Address: 123 Random Guy Ln, Houston, Tx 77777
            </p>
            <p className="fs-5">Number of Listings: 3</p>
          </div>
          <div className="row">
            <div className="col">
              <Link to="/addlisting" className="btn btn-primary">
                Add Listing
              </Link>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-center mt-5 mb-3">My Listings</h3>

      <div className="row d-flex justify-content-center">
        <HostListingCard />
        <HostListingCard />
        <HostListingCard />
      </div>
    </>
  );
};
