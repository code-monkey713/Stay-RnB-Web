import React from "react";
import { Link, useLocation } from "react-router-dom";

export const NavTabs = () => {
  return (
    <div className="footer row m-auto">
      <div className="col tab">
        <li className="tabList fs-2">
          <Link className="tabLink"  to="/login">Login</Link>
        </li>
      </div>
      <div className="col tab">
        <li className="tabList fs-2">
          <Link className="tabLink"  to="/signup">Sign Up</Link>
        </li>
      </div>
      <div className="col tab">
        <li className="tabList fs-2">
          <Link className="tabLink" to="/listing">Listings</Link>
        </li>
      </div>
      <div className="col tab">
        <li className="tabList fs-2">
          <Link className="tabLink" to="/profile">Profile</Link>
        </li>
      </div>
    </div>
  );
};
