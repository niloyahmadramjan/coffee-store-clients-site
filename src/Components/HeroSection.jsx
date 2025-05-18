import React from "react";

const HeroSection = () => {
  return (
    <div className="hero min-h-screen bg-cover bg-center bg-[url(https://i.ibb.co/kVDH13q5/Rectangle-2-11zon.jpg)] ">
      <div className="hero-content text-neutral-content flex-col lg:flex-row-reverse gap-12 col-span-5">
        <div className="max-w-md text-center lg:text-left">
          <h1 className="mb-5 text-4xl font-bold">
            Would you like a{" "}
            <span className="text-primary">Cup of Delicious Coffee?</span>
          </h1>
          <p className="mb-5 text-sm">
            It’s coffee time – Sip & Savor – Relaxation in every sip! Get the
            nostalgic taste! Your companion of every moment! Enjoy the beautiful
            moments and make them memorable.
          </p>
          <button className="btn btn-primary hover:rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
