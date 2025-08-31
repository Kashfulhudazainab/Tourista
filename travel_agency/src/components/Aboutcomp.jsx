import React from "react";

function Aboutcomp() {
  return (
    <div>
      <div className="mt-16 flex flex-col p-8 md:p-16 bg-gray-100 rounded-lg shadow-lg">

        <div className="mb-8 md:mb-0 flex flex-col justify-center text-center align-center gap-4 p-9">
          <h2 className="text-3xl font-bold  flex items-center align-center justify-center text-gray-800 mb-4">About Us</h2>
          <div className="w-12 h-1 bg-blue-500 mx-auto my-2 rounded-full"></div>
          <p className="text-gray-600 text-base leading-relaxed mb-4 flex items-center align-center justify-center">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut in facere totam repellat aperiam fugit ullam pariatur, aliquam numquam!
          </p>
        </div>

        <div className="flex flex-col items-center align-center justify-between gap-3 md:flex-row">
          <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://multilan.itech-theme.com/static/media/1.be195ab0.png"
              alt="Our team"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              We are not only travel agency but also travel lover.
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Aboutcomp;
