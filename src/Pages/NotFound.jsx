import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="my-6 ">
        <Link
          to="/"
          className="text-lg font-semibold text-[#3f2d21] hover:bg-orange-300 hover:rounded-full btn btn-outline"
        >
          ← Back to home
        </Link>
      </div>
      <div>
        <img src="https://i.ibb.co/chC11YMM/404.gif" alt="" />
      </div>
    </div>
  );
};

export default NotFound;
