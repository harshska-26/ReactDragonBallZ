import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar.component";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
