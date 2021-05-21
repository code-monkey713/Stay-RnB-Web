import React, { useState, useEffect } from "react";
import { HostProfile } from "../components/Profiles/";
import { UserProfile } from "../components/Profiles/";
import API from "../utils/API";

export const Profile = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(async () => {
    const { data } = await API.getUser();
    setUserInfo(data);
  }, []);

  if (Object.entries(userInfo).length > 0) {
    return (
      <div>
        <HostProfile userInfo={userInfo} />
        {/* <UserProfile /> */}
      </div>
    );
  } else {
    return null;
  }
};
