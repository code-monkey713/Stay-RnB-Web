import React from 'react';
import Woman from '../../assets/Woman.jpg';
import { ListingCard } from '../../components';

export const UserProfile = () => {
  return (
    <>
      <div className="row profileContainer">
        <div className="col d-flex justify-content-center align-items-center">
          <img src={Woman} className="img-fluid userImage" />
        </div>
        <div className="col">
          <h1>User Profile</h1>
          <p className="fs-5">First Name: Bar</p>
          <p className="fs-5">Last Name: Foo</p>
          <p className="fs-5">Email Address: BarFoo@email.com</p>
          <p className="fs-5">Phone Number: 098-765-4321</p>
          <p className="fs-5">
            Address: 789 Random Woman Ln, Houston, Tx 77777
          </p>
          <p className="fs-5">Areas of Interest: 77777, 12345</p>
        </div>
      </div>
    </>
  );
};
