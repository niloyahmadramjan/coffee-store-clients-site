import React from "react";
import { Link, useLoaderData } from "react-router";

const CoffeeViewInfo = () => {
  const { name, chef, supplier, category, details, price, photo } =
    useLoaderData();

  return (
    <div className="min-h-screen bg-base-200 flex flex-col justify-center items-center px-6 py-10">
      {/* Back to home */}
      <div className="mb-6 self-start">
        <Link
          to="/"
          className="text-lg font-semibold text-[#3f2d21] hover:bg-orange-300 hover:rounded-full btn btn-outline"
        >
          ← Back to home
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row justify-between  gap-6 bg-[#F4F3F0] shadow-xl p-6 rounded-xl w-full max-w-5xl">
        <div className="w-full lg:w-1/2">
          <img src={photo} alt="Coffee" className="rounded-xl w-2/3" />
        </div>
        <div className="card-body justify-start w-full lg:w-1/2">
          <h2 className="card-title text-3xl font-bold">Niceties</h2>
          <ul className="text-base text-neutral">
            <li>
              <span className="font-semibold">Name:</span> {name}
            </li>
            <li>
              <span className="font-semibold">Chef:</span> {chef}
            </li>
            <li>
              <span className="font-semibold">Supplier:</span> {supplier}
            </li>
            <li>
              <span className="font-semibold">Price:</span> {price}
            </li>
            <li>
              <span className="font-semibold">Category:</span> {category}
            </li>
            <li>
              <span className="font-semibold">Details:</span> {details}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoffeeViewInfo;
