
import { FaFacebook } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { ImCross } from "react-icons/im";


function Sidebar({ activeLink, setActiveLink, showcart, setshowcart }) {
  const links = ["HOME", "ABOUT", "OFFER", "FAQ", "REVIEW", "CONTACT"];

  return (
    <div
      className={`fixed top-0 right-0 h-screen font-inter bg-white w-72 transform transition-transform duration-300 ease-in-out z-50 ${
        showcart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 text-blue-500 flex flex-col h-full">
        <div className="flex justify-between items-center mb-10">
          <div className="font-bold text-2xl flex items-center">MultiLan</div>
          <button
            onClick={() => setshowcart(false)}
            className="hover:text-blue-700 focus:outline-none"
          >
            <ImCross/>
          </button>
        </div>

        <nav className="flex flex-col space-y-4 flex-grow">
          {links.map((link) => (
            <div
              key={link}
              onClick={() => {
                setActiveLink(link);
                setshowcart(false); // Close the sidebar on link click
              }}
              className={`py-2 px-4 rounded-md text-gray-800 font-medium transition-colors duration-200 border-l-4 cursor-pointer flex items-center
                ${
                  activeLink === link
                    ? "bg-gray-200 border-blue-500"
                    : "hover:bg-gray-200 border-transparent hover:border-blue-500"
                }`}
            >
              <span
                className={`h-0.5 w-6 mr-3 ${
                  activeLink === link ? "bg-blue-500" : "bg-gray-400"
                }`}
              ></span>
              {link}
            </div>
          ))}
        </nav>

        <div className="mt-auto p-6 flex justify-center space-x-4 text-blue-500">
          <FaFacebook className="w-8 h-8"/>
          <IoLogoSkype  className="w-8 h-8"/>
          <FaGoogle  className="w-8 h-8"/>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
