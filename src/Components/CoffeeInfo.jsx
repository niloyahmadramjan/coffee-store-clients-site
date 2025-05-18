import React from 'react';

const CoffeeInfo = () => {
    return (
        <div className="bg-[#f2eee9] py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 space-y-3">
        <div className="text-left space-y-2">
          <div className="text-4xl text-[#3f2d21]">
            <img src="https://i.ibb.co/sdSFNpjP/1.png" alt="" />
          </div>
          <h2 className="text-xl font-bold text-[#3f2d21]">Awesome Aroma</h2>
          <p className="text-sm text-gray-600">
            You will definitely be a fan of the design <br /> & aroma of your
            coffee
          </p>
        </div>

        <div className="text-left space-y-2">
          <div className="text-4xl text-[#3f2d21]">
            <img src="https://i.ibb.co/wFpQ35gM/2.png" alt="" />
          </div>
          <h2 className="text-xl font-bold text-[#3f2d21]">High Quality</h2>
          <p className="text-sm text-gray-600">
            We served the coffee to you maintaining <br /> the best quality
          </p>
        </div>

        <div className="text-left space-y-2">
          <div className="text-4xl text-[#3f2d21]">
            <img src="https://i.ibb.co/Z6sHMWZV/3.png" alt="" />
          </div>
          <h2 className="text-xl font-bold text-[#3f2d21]">Pure Grades</h2>
          <p className="text-sm text-gray-600">
            The coffee is made of the green coffee <br /> beans which you will
            love
          </p>
        </div>

        <div className="text-left space-y-2">
          <div className="text-4xl text-[#3f2d21]">
            <img src="https://i.ibb.co/7JDcPPVx/4.png" alt="" />
          </div>
          <h2 className="text-xl font-bold text-[#3f2d21]">Proper Roasting</h2>
          <p className="text-sm text-gray-600">
            Your coffee is brewed by first roasting <br /> the green coffee
            beans
          </p>
        </div>
      </div>
    </div>
    );
};

export default CoffeeInfo;