import React from "react";
import Man from "../../assets/Man.jpg";

export const UserProfile = ({ userInfo }) => {
  return (
    <>
      <div className="row profileContainer">
        <div className="col d-flex justify-content-center align-items-center">
          <img src={Man} className="img-fluid userImage" />
        </div>
        <div className="col">
          <p className="fs-5 text-capitalize">First Name: {userInfo.firstName}</p>
          <p className="fs-5 text-capitalize">Last Name: {userInfo.lastName}</p>
          <p className="fs-5">Email Address: {userInfo.email}</p>
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
