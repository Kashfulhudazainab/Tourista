import React from 'react'

function Offercomp() {
   return(
    <div className="bg-gray-100 py-16 px-4 font-inter text-gray-800">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Best Offer</h2>
            <div className="w-12 h-1 bg-blue-500 mx-auto my-2 rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6">
            {/* Card 1 */}
            <div className="group relative w-full md:w-1/3 max-w-sm rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYpvuDbsW8zosBNEBpaYk4DMmVQzW6NpgREw&s" alt="Mountain Landscape" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-blue-500 bg-opacity-80 flex flex-col justify-end p-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-semibold">Hiller Side River</h3>
                    <p className="text-gray-100 mt-1">Australia</p>
                    <div className="flex items-center text-white mt-2">
                        <span className="text-lg font-bold mr-2">$2250</span>
                        <span className="text-sm line-through text-gray-200">$3450</span>
                    </div>
                    <button className="mt-4 bg-white text-blue-600 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-100 transition-colors duration-200">
                        Book Now
                    </button>
                </div>
            </div>

            {/* Card 2 */}
            <div className="group relative w-full md:w-1/3 max-w-sm rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1foEYXcV62wENrz-EYd7YOkuTTLf7SHQsew&s" alt="Snowy River Landscape" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-blue-500 bg-opacity-80 flex flex-col justify-end p-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-semibold">Hiller Side River</h3>
                    <p className="text-gray-100 mt-1">Australia</p>
                    <div className="flex items-center text-white mt-2">
                        <span className="text-lg font-bold mr-2">$2250</span>
                        <span className="text-sm line-through text-gray-200">$3450</span>
                    </div>
                    <button className="mt-4 bg-white text-blue-600 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-100 transition-colors duration-200">
                        Book Now
                    </button>
                </div>
            </div>

            {/* Card 3 */}
            <div className="group relative w-full md:w-1/3 max-w-sm rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAafjj2L0tXOcOe6j0Cxykc_f0GSqcbfUXfw&s" alt="Cabin in the Snow" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-blue-500 bg-opacity-80 flex flex-col justify-end p-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-semibold">Hiller Side River</h3>
                    <p className="text-gray-100 mt-1">Australia</p>
                    <div className="flex items-center text-white mt-2">
                        <span className="text-lg font-bold mr-2">$2250</span>
                        <span className="text-sm line-through text-gray-200">$3450</span>
                    </div>
                    <button className="mt-4 bg-white text-blue-600 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-100 transition-colors duration-200">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    </div>
   )
}

export default Offercomp
