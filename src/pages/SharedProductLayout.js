import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import StyledNavbar from "../components/StyledNavbar"
const SharedLayout = () => {
  return (
    <>
      <h2>products</h2>
      <Outlet />
    </>
  );
};
export default SharedLayout;
