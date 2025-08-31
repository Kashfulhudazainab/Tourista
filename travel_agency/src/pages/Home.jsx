import React from "react";
import { BsFillLuggageFill } from "react-icons/bs";
import { GiCircleForest } from "react-icons/gi";
import { GiHelicopter } from "react-icons/gi";
import Aboutcomp from "../components/Aboutcomp";
import Offercomp from "../components/Offercomp";
import Offer2 from "../components/Offer2";
import FaqComp from '../components/FaqComp'
import Reviewcomp from "../components/Reviewss";
import Contactcomp from "../components/Contcomp";
// import Footercomp from "../components/Footercomp";
// import Headercomp from "../components/Headercomp";

function Home() {
  return (
    <div>


 <div className="bg-white p-8 md:p-16">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-12">
          <p className="text-gray-600 text-lg mb-2">Hello Nice People</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Are you still interested to tour this time?
          </h2>
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-600 text-base leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't even slightly believable. If you are going
          </p>
        </div>
      </div>
      {/* You can add the social icons or other elements here as needed. */}
    </div>

    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        {/* Card 1: Value For Money */}
        <div className="flex flex-col items-center text-center border-2 border-blue-300 rounded-lg p-6 hover:bg-blue-300 hover:text-white-500">
          <div className="w-24 h-24 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 hover:bg-blue-300 hover:border-white-500">
            <BsFillLuggageFill className="text-blue-500 w-10 h-10"/>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Value For Money</h3>
          <p className="text-gray-600 text-sm leading-relaxed text-center">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
          </p>
        </div>
        {/* Card 2: Beautiful Places */}
        <div className="flex flex-col items-center text-center border-2 border-blue-300 rounded-lg p-6  hover:bg-blue-300 hover:text-white-500">
          <div className="w-24 h-24 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 hover:bg-blue-300 hover:text-white">
           <GiCircleForest className="text-blue-500 w-10 h-10"/>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Beautiful Places</h3>
          <p className="text-gray-600 text-sm leading-relaxed text-center">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
          </p>
        </div>
        {/* Card 3: Passionate Travel */}
        <div className="flex flex-col items-center text-center border-2 border-blue-300 rounded-lg p-6  hover:bg-blue-300 hover:text-white-500">
          <div className="w-24 h-24 border-2 border-blue-300 rounded-full flex items-center justify-center mb-4 hover:bg-blue-300 hover:text-white">
            <GiHelicopter className="text-blue-500 w-10 h-10"/>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Passionate Travel</h3>
          <p className="text-gray-600 text-sm leading-relaxed text-center">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
          </p>
        </div>
        </div>

        <Aboutcomp/>

        <Offercomp/>

        <Offer2/>

        <FaqComp/>

        <Reviewcomp/>

        <Contactcomp/>


    </div>
  );
}

export default Home;
