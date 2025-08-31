import React from "react";

function Hero() {
  return (
    <div className="w-full h-screen relative flex flex-col justify-center items-center p-4 gap-4">
      <div>
        <h3 className="text-lg text-white">Enjoy Your Tour With US</h3>
      </div>
      <div>
        <h2 className="text-xl text-white">Tour Lover People</h2>
      </div>
      <div className="flex items-start justify-start">
        <span className="text-lg text-white">
          There are many variations of passages of Lorem Ipsum available, but
          the of majority have suffered alteration in some form, by injected
          randomised. going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything in embarrassing hidden in the middle of text.
        </span>
      </div>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2">Learn More</button>
      </div>
    </div>
  );
}

export default Hero;
