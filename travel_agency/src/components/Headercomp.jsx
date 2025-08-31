import React,{ useState } from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import Hero from './Hero'

const Headercomp=({ activeLink, setActiveLink }) => {
    const [showcart, setshowcart] = useState(false);

    return (
          <div
                className="relative flex flex-col justify-center text-center p-2 md:p-8 bg-cover"
                style={{
                  backgroundImage:
                    'url("https://multilan.itech-theme.com/static/media/1.3b4bd7e2.png")',
                }}
              >
                <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-md"></div>
                <Nav className="relative z-50 text-white" activeLink={activeLink} setActiveLink={setActiveLink} />
                <Sidebar className="relative z-50" activeLink={activeLink} setActiveLink={setActiveLink} showcart={showcart} setshowcart={setshowcart}/>
                <Hero className="relative z-50" />
              </div>
    )
}

export default Headercomp
