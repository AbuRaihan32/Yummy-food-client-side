import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="w-[90%] mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
