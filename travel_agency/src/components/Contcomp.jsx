import React from 'react';

function Contactcomp() {
  return (
    <div className="bg-white py-16 px-4 font-inter text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Contact With Us</h2>
        <div className="w-12 h-1 bg-blue-500 mx-auto my-2 rounded-full"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-start lg:items-stretch gap-8 max-w-5xl mx-auto">
        {/* Contact Info Section */}
        <div className="flex-1 space-y-4 w-full">
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.5 2.5a.5.5 0 00-.5.5v19a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-19a.5.5 0 00-.5-.5h-1zm-13 0a.5.5 0 00-.5.5v19a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-19a.5.5 0 00-.5-.5h-1zm-4 4a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5h-1zm15 0a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-12a.5.5 0 00-.5-.5h-1z"/>
              </svg>
              <div className="flex flex-col">
                <p>+88 012 345 678 87</p>
                <p>+88 013 439 596 78</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.5 4A2.5 2.5 0 000 6.5v11A2.5 2.5 0 002.5 20h19A2.5 2.5 0 0024 17.5v-11A2.5 2.5 0 0021.5 4h-19zm19.382 1.5l-9.191 6.892L2.618 5.5h18.264zM2 17.5V7.818l8.591 6.444a1.5 1.5 0 001.636 0L22 7.818v9.682z"/>
              </svg>
              <div className="flex flex-col">
                <p>Info@multilan.com</p>
                <p>contact@multilan.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <div className="flex flex-col">
                <p>35 Rahim Plaza , Shakpara</p>
                <p>Khulna , Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Get In Touch Section */}
        <div className="flex-1 w-full">
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <div className="bg-gray-100 p-6 rounded-xl shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Name" className="p-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500" />
              <input type="email" placeholder="Email" className="p-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <input type="text" placeholder="Subject" className="w-full p-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <textarea placeholder="Message" className="w-full p-4 rounded-xl border-2 border-gray-200 focus:outline-none focus:border-blue-500 h-32 resize-none"></textarea>
            </div>
               <button className="bg-blue-500 text-white px-4 py-2 hover:bg-white hover:text-blue-500 hover:border-blue-500 hover:border-2">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactcomp;
