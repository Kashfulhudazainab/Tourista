import React from 'react'

function Offer2() {
    return (
       
    <div 
      className="relative w-full h-[500px] flex items-center justify-center text-center text-white font-inter"
      style={{
        backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv6O1uJhxvzWTLAN0y-iIWIZmg9ZLmzuj3lg&s")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
          We Are Waiting For Some Exciting Moment With You.
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-lg max-w-xl text-gray-200">
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
        </p>
        <button className="mt-6 md:mt-8 px-8 py-3 rounded-full text-sm font-semibold border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-colors duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
    
}

export default Offer2
