import React,{useState} from 'react'
import faqs from '../questions'

function FaqComp() {
     const [openIndex, setOpenIndex] = useState(0);
      return (
    <div className="bg-white py-16 px-4 font-inter text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">FAQS</h2>
        <div className="w-12 h-1 bg-blue-500 mx-auto my-2 rounded-full"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 max-w-6xl mx-auto">
        {/* FAQ Left Section */}
        <div className="w-full md:w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl shadow-md transition-all duration-300 cursor-pointer ${
                openIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between font-semibold">
                <span>{`0.${index + 1} ${faq.question}`}</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-white' : ''}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 mt-2' : 'max-h-0'
                }`}
              >
                <p className="text-sm mt-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Right Image Section */}
        <div className="hidden md:block w-full md:w-1/2 max-w-sm rounded-xl shadow-lg overflow-hidden relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtGW_G7NnCzlWivspncDEi4jSP-h1bmtSIg&s"
            alt="FAQs Visual"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
            <p className="text-white text-base">
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.Et harum quidem rerum facilis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqComp
