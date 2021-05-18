import React from "react";
import { Link, useLocation } from "react-router-dom";

export const MainNavTabs = () => {
  return (
    <div className="navTabs row m-auto">
      <div className="col tab">
        <li className="tabList fs-2">
          <Link className="tabLink"  to="/">Home</Link>
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
