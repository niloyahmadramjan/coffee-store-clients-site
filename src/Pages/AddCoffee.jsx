import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added successfully !",
            text: "You clicked the button!",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Coffee not add!",
            text: "You clicked the button!",
            icon: "fail",
          });
        }
      });
  };

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      <div className="mb-6">
        <Link
          to="/"
          className="text-lg font-semibold text-[#3f2d21]  hover:bg-orange-300 hover:rounded-full btn btn-outline"
        >
          ← Back to home
        </Link>
      </div>

      <div className="bg-[#f4f3f0] p-8 rounded-lg ">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#3f2d21]">
          Add New Coffee
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-10">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <form onSubmit={handleAddCoffee} className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label">Name</label>
              <input
                required
                type="text"
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
                name="name"
              />
            </div>
            <div>
              <label className="label">Chef</label>
              <input
                type="text"
                placeholder="Enter coffee chef"
                className="input input-bordered w-full"
                name="chef"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label">Supplier</label>
              <input
                type="text"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full"
                name="supplier"
              />
            </div>
            <div>
              <label className="label">Price</label>
              <input
                required
                type="text"
                placeholder="Enter coffee price"
                className="input input-bordered w-full"
                name="price"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label">Category</label>
              <input
                type="text"
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
                name="category"
              />
            </div>
            <div>
              <label className="label">Details</label>
              <input
                type="text"
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
                name="details"
              />
            </div>
          </div>

          {/* Photo URL */}
          <div>
            <label className="label">Photo</label>
            <input
              required
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
              name="photo"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="btn w-full bg-[#D2B48C] text-black hover:bg-[#c7a97d]"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
