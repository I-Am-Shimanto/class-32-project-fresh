import React from 'react'

const Navbar = () => {
  return (
      <>
          <nav id="navbar" className="py-13 px-2">
              <div className="container mx-auto">
                  <div className="flex justify-between items-center">
                      <div className="logo">
                          <img className="cursor-pointer" src="/logo.png" alt="" />
                      </div>
                      <div>
                          <ul className="flex gap-15 text-2xl font-semibold text-black">
                              <li className="hover:text-yellow-400 transition-all duration-300">
                                  <a href="#">Men</a>
                              </li>
                              <li className="hover:text-yellow-400 transition-all duration-300">
                                  <a href="#">Woman</a>
                              </li>
                              <li className="hover:text-yellow-400 transition-all duration-300">
                                  <a href="#">Kids</a>
                              </li>
                              <li className="hover:text-yellow-400 transition-all duration-300">
                                  <a href="#">Collection</a>
                              </li>
                              <li className="hover:text-yellow-400 transition-all duration-300">
                                  <a href="#">Trends</a>
                              </li>
                          </ul>
                      </div>
                      <div className="flex gap-2.5">
                          <a className="w-28 inline-block border border-yellow-400 rounded-lg py-2.5 text-center text-2xl font-semibold text-black hover:bg-yellow-500 transition-all duration-300 shadow-lg" href="#">Login</a>
                          <a className="w-28 inline-block border border-yellow-400 rounded-lg py-2.5 text-center text-2xl font-semibold text-black hover:bg-yellow-500 transition-all duration-300 shadow-lg" href="#">Sign up</a>
                      </div>
                  </div>
              </div>
          </nav>
      </>
  )
}

export default Navbar