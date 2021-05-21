import { Home, Login, Signup } from "../pages";
import { Outlet } from "react-router-dom";
import { MainNavTabs } from "../components";

export const Main = () => {
  return (
    <>
      <div className="layoutContainer">
        <Outlet />
      </div>
      <MainNavTabs />
    </>
  );
};