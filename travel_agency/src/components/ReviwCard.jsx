
import { FaComment } from "react-icons/fa";
const ReviewCard = ({ text, author, role }) => {
    return (
      <div className={`group relative w-full md:w-1/3 max-w-sm rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300`}>
        {/* Base Card (visible by default) */}
        <div className={`p-8 rounded-xl shadow-md transition-colors duration-300 bg-gray-500`}>
          <div className={`flex justify-start text-blue-300 text-4xl mb-4`}>
            <FaComment/>
          </div>
          <p className="text-gray-200 text-base">{text}</p>
          <div className="mt-8 pt-4 border-t border-gray-600">
            <h4 className="text-white text-lg font-semibold">{author}</h4>
            <p className="text-gray-400 text-sm">{role}</p>
          </div>
        </div>

        {/* Hover Layer (visible on hover for all cards) */}
        <div className="absolute inset-0 bg-blue-500 bg-opacity-80 flex flex-col p-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl">
          <div className="flex justify-start text-gray-300 text-4xl mb-4">
            <FaComment/>
          </div>
          <p className="text-gray-100 text-base">{text}</p>
          <div className="mt-auto pt-4 border-t border-green-300">
            <h4 className="text-white text-lg font-semibold">{author}</h4>
            <p className="text-gray-100 text-sm">{role}</p>
          </div>
        </div>
      </div>
    );
  };

export default ReviewCard