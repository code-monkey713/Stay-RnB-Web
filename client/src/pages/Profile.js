import React, { useState, useEffect } from "react";
import { HostProfile } from "../components/Profiles/";
import { UserProfile } from "../components/Profiles/";
import API from "../utils/API";

export const Profile = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(async () => {
    const { data } = await API.getUser();
    setUserInfo(data);
    console.log(data);
  }, []);


  if (userInfo) {
    if (userInfo.host) {
      return (
        <div>
          <HostProfile userInfo={userInfo} />
        </div>
      );
    } else {
      return (
        <div>
          <UserProfile userInfo={userInfo}/>
        </div>
      );
    }
  } else {
    return null;
  }
};
