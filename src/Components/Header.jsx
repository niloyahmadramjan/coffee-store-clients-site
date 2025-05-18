import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
  <div className="navbar  flex justify-center items-center bg-[url(https://i.ibb.co/8Dqf9kYq/15.jpg)] ">
        <div className="flex justify-center items-center gap-2">
            <img src="https://i.ibb.co/MD0Sxd81/logo1.png" className="w-10" alt="" />
            <h2 className="rancho font-bold text-2xl">Espresso Emporium</h2>
        </div>
  </div>
  );
};

export default Header;
