import React from 'react';
import ReviewCard from './ReviwCard';

function Reviewscomp() {
  
  return (
    <div className="bg-gray-100 py-16 px-4 font-inter text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Review From Client</h2>
        <div className="w-12 h-1 bg-blue-500 mx-auto my-2 rounded-full"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6">
        {/* First Card - Now Hoverable */}
        <ReviewCard
          text="On the other hand, we are denounce with in righteous indignation and dislike men who are so beguiled and a demoralized by the charms of pleasure."
          author="Jon Doe"
          role="Founder"
          isHoverable={true}
        />
        
        {/* Second Card - Now Hoverable */}
        <ReviewCard
          text="On the other hand, we are denounce with in righteous indignation and dislike men who are so beguiled and a demoralized by the charms of pleasure."
          author="Alex Smit"
          role="Founder"
          isHoverable={true}
        />

        {/* Third Card - Now Hoverable */}
        <ReviewCard
          text="On the other hand, we are denounce with in righteous indignation and dislike men who are so beguiled and a demoralized by the charms of pleasure."
          author="Jon Dow"
          role="Founder"
          isHoverable={true}
        />
      </div>
    </div>
  );
}

export default Reviewscomp;
