import React from "react";
import { Link } from "react-router";

const CoffeeCardInfo = ({ coffee }) => {
  const { _id, name, chef, price, photo } = coffee;
  return (
    <div className="bg-[#f4f3f0] rounded-lg flex items-center justify-between p-4">
      <img src={photo} alt="coffee" className="w-28" />
      <div className="flex-1 ml-4">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Chef:</strong> {chef}
        </p>
        <p>
          <strong>Price:</strong> {price} Taka
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <Link to={`/coffeeViewInfo/${_id}`}>
          <button className="btn btn-sm btn-ghost bg-[#D2B48C]">👁</button>
        </Link>
        <Link to={`/coffeeUpdate/${_id}`}>
          <button className="btn btn-sm btn-ghost bg-black text-white">
            ✏️
          </button>
        </Link>
        <button  className="btn btn-sm btn-ghost bg-red-500 text-white">
          🗑
        </button>
      </div>
    </div>
  );
};

export default CoffeeCardInfo;
