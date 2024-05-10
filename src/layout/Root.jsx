import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default Root;
