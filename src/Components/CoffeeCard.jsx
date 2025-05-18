import React, { use } from "react";
import { Link } from "react-router";
import CoffeeCardInfo from "./CoffeeCardInfo";

const CoffeeCard = ({ coffeePromise }) => {
  const coffeeFetchData = use(coffeePromise);
  return (
    <div className="py-10 bg-white">
      <div className="text-center space-y-2 mb-8">
        <p className="text-sm text-gray-500">--- Sip & Savor ---</p>
        <h2 className="text-3xl font-bold text-[#3f2d21]">
          Our Popular Products
        </h2>
        <Link to="/addCoffee" className="btn btn-outline btn-warning">
          Add Coffee <span className="ml-2">☕</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
        {coffeeFetchData.map((coffee) => (
          <CoffeeCardInfo key={coffee._id} coffee={coffee}></CoffeeCardInfo>
        ))}
      </div>
    </div>
  );
};

export default CoffeeCard;
