import React from "react";
import { Link, useLocation } from "react-router-dom";

export const WelcomeNavTabs = () => {
  return (
    <div className="navTabs row m-auto">
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
    </div>
  );
};
