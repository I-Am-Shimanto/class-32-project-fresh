import React from 'react'

const Fashion = () => {
  return (
      <>
          <section id="fashion" className="">
              <div className="container mx-auto">
                  <div className="flex flex-col xl:flex-row xl:gap-9">
                      <div className="img z-10">
                          <img src="/fashion.png" alt="" />
                      </div>
                      <div className="text mt-30">
                          <h2 className="w-xs xl:w-sm text-5xl font-semibold text-black leading-16">Best Fashion
                              Since 2010</h2>
                          <p className="xl:w-md text-2xl font-normal text-black leading7 mt-16 mb-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare
                              rhoncus, elementum non viverra.</p>
                          <div className="counter flex flex-col xl:flex-row gap-14 py-10 xl:py-16 pl-5 xl:pl-8 pr-10 xl:pr-20 bg-amber-200 xl:-translate-x-44 xl:translate-y-20 rounded-2xl">
                              <div className="xl:pr-7 xl:border-r">
                                  <h4 className="text-5xl xl:text-6xl font-bold text-black mb-7 text-center xl:text-start">2010</h4>
                                  <p className="text-2xl xl:text-3xl font-medium text-black text-center xl:text-start">Founded</p>
                              </div>
                              <div className="xl:pr-7 xl:border-r">
                                  <h4 className="text-5xl xl:text-6xl font-bold text-black mb-7 text-center xl:text-start">5000+</h4>
                                  <p className="text-2xl xl:text-3xl font-medium text-black text-center xl:text-start">Product Sold</p>
                              </div>
                              <div className="">
                                  <h4 className="text-5xl xl:text-6xl font-bold text-black mb-7 text-center xl:text-start">4500+</h4>
                                  <p className="text-2xl xl:text-3xl font-medium text-black text-center xl:text-start">Best Reviews</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Fashion