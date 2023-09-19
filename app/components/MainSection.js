import React from "react";

export default function MainSection() {
  return (
    <main className="py-8">
      <div className="container mx-auto flex flex-wrap">
        {/* First section */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src="/images/image1.jpg" 
            alt="Left Image"
            className="w-half h-auto rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <p className="text-xl font-bold">Left Side Text</p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            justo eu urna vulputate dignissim.
          </p>
        </div>

        {/* Second section */}
        <div className="w-full md:w-1/2 p-4 order-last md:order-first">
          <p className="text-xl font-bold">Right Side Text</p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            justo eu urna vulputate dignissim.
          </p>
        </div>

        <div className="w-half md:w-1/2 p-4 order-first md:order-last">
          <img
            src=" /images/image1.jpg" 
            alt="Right Image"
            className="w-half h-auto rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
