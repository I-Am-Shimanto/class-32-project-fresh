

function App() {

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

      <section id="collection" className="my-25 mx-6">
        <div className="container mx-auto">
          <div className="heading">
            <h2 className="text-center text-4xl sm:text-6xl font-bold text-black">New Collection</h2>
            <p className="text-center text-xl sm:text-2xl font-normal my-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="img md:w-1/3 mx-6 my-5 md:my-0 relative">
              <img src="/collection_1.png" alt=""/>
                <a className="absolute bottom-11 left-4 bg-white w-6/10 sm:w-2/4 md:w-7/10 text-center py-3 text-2xl text-normal rounded-2xl hover:bg-yellow-400 transition-all duration-300" href="#">Sweater</a>
            </div>
            <div className="img md:w-1/3 mx-6 my-5 md:my-0 relative"  >
              <img src="/collection_2.png" alt=""/>
                <a className="absolute bottom-11 left-4 bg-white w-6/10 sm:w-2/4 md:w-7/10 text-center py-3 text-2xl text-normal rounded-2xl hover:bg-yellow-400 transition-all duration-300"
                  href="#">Jeans</a>
            </div>
            <div className="img md:w-1/3 mx-6 my-5 md:my-0 relative"  >
              <img src="/collection_3.png" alt=""/>
                <a className="absolute bottom-11 left-4 bg-white w-6/10 sm:w-2/4 md:w-7/10 text-center py-3 text-2xl text-normal rounded-2xl hover:bg-yellow-400 transition-all duration-300"
                  href="#">Baskets</a>
            </div>
          </div>
        </div>
      </section>

      <section id="fashion" className="">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-9">
            <div className="img z-10">
              <img src="/fashion.png" alt=""/>
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

      <footer id="footer" className="mt-36 px-16 pt-20 pb-40 bg-yellow-700 ">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="text xl:w-1/3" >
              <h2 className="text-3xl sm:text-4xl xl:text-6xl font-bold text-white">Best Seller Product</h2>
              <p className="text-lg sm:text-2xl xl:text-2xl font-medium text-white my-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis.
                Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer
                maecenas tortor non lectus.</p>
              <a className="inline-block px-16 sm:px-25 py-6 bg-black text-white text-2xl font-bold rounded-xl" href="#">SEE MORE</a>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="img">
                <img className="" src="/footer_img_1.png" alt=""/>
                  <div className="text bg-white pt-4 pl-5 pb-2.5">
                    <div className="flex gap-2">
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                    </div>
                    <h3 className="text-2xl font-semibold text-black py-3">Sweater Shirt</h3>
                    <div className="flex gap-8">
                      <p className="text-2xl font-normal text-gray-300">$45.99</p>
                      <p className="text-2xl font-normal text-black">$35.99</p>
                    </div>
                  </div>
              </div>
              <div className="img">
                <img src="/footer_img_2.png" alt=""/>
                  <div className="text bg-white pt-4 pl-5 pb-2.5">
                    <div className="flex gap-2">
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                      <i className="fa-solid fa-star text-yellow-400"></i>
                    </div>
                    <h3 className="text-2xl font-semibold text-black py-3">Pants fashion</h3>
                    <div className="flex gap-8">
                      <p className="text-2xl font-normal text-gray-300">$55</p>
                      <p className="text-2xl font-normal text-black">$44.99</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
