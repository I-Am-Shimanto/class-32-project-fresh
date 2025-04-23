import React from 'react'

const Banner = () => {
  return (
      <>
          <section id="banner" className="mt-16 mx-6">
              <div className="container mx-auto">
                  <div className="flex flex-col md:flex-row md:justify-between">
                      <div>
                          <h1 className="w-full md:w-sm xl:w-lg text-5xl sm:text-6xl text-center md:text-start font-bold text-black sm:leading-16 xl:leading-22">Find The Best Fashion Style
                              For You</h1>
                          <p className="w-full md:w-sm xl:w-lg text-xl text-center md:text-start font-normal text-black mt-9 mb-20 md:leading-8 xl:leading-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare
                              rhoncus, elementum non viverra.</p>
                          <a className="py-6 px-22 bg-black text-white text-2xl font-bold rounded-xl hover:bg-yellow-400 transition-all duration-300" href="#">SHOP NOW</a>
                      </div>
                      <div>
                          <img className="mt-10 md:mt-0" src="/banner.png" alt=""></img>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Banner