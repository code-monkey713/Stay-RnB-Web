import React from "react";
import Man from "../../assets/Man.jpg";
import { ListingCard } from '../../components';

export const HostProfile = () => {
  return (
    <>
      <div className="row profileContainer">
        <div className="col d-flex justify-content-center align-items-center">
          <img src={Man} className="img-fluid userImage" />
        </div>
        <div className="col">
          <h1>Host Profile</h1>
          <h2>First Name: Foo</h2>
          <h2>Last Name: Bar</h2>
          <h2>Email Address: FooBar@email.com</h2>
          <h2>Phone Number: 123-456-7890</h2>
          <h2>Address: 123 Random Guy Ln, Houston, Tx 77777</h2>
          <h2>Number of Listings: 2</h2>
        </div>
      </div>

      <h3 className="text-center mt-5 mb-3">My Listings</h3>

      <ListingCard />
    </>
  );
};
