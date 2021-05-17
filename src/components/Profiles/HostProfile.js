import React from "react";
import Man from '../../assets/Man.jpg';


export const HostProfile = () => {
  return (
    <>
    <div>
      <h1 className="text-center mt-2 mb-3">Host Profile</h1>
    </div>

    <div className="row">
      <div className="col">
        <img src={Man}/>
      </div>
    </div>
    </>
  );
};

export default HostProfile;
