import React from "react";

export const NavTabs = () => {
  return (
    <div className="footer row m-auto">
        <div className="col tab">
          <a href="#" className="tabLinks fs-2">Login</a>
        </div>
        <div className="col tab">
          <a href="#" className="tabLinks fs-2">Sign Up</a>
        </div>
        <div className="col tab">
          <a href="#" className="tabLinks fs-2">Listings</a>
        </div>
        <div className="col tab">
          <a href="#" className="tabLinks fs-2">Profile</a>
      </div>
    </div>
  );
};
