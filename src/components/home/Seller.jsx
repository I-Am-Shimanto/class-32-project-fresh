import React from 'react'
import SellerCard from './SellerCard'

const Seller = () => {
  return (
      <>
          <section id="footer" className="mt-36 px-16 pt-20 pb-40 bg-yellow-700 ">
              <div className="container mx-auto">
                  <div className="flex flex-col xl:flex-row gap-6">
                      <div className="text xl:w-1/3" >
                          <h2 className="text-3xl sm:text-4xl xl:text-6xl font-bold text-white">Best Seller Product</h2>
                          <p className="text-lg sm:text-2xl xl:text-2xl font-medium text-white my-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis.
                              Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer
                              maecenas tortor non lectus.</p>
                          <a className="inline-block px-16 sm:px-25 py-6 bg-black text-white text-2xl font-bold rounded-xl hover:bg-white hover:text-black transition-all duration-300" href="#">SEE MORE</a>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-6">
                          <SellerCard image={"/footer_img_1.png"} productName={"Sweater Shirt"} price1={"$45.99"} price2={"$35.99"}/>
                          <SellerCard image={"/footer_img_2.png"} productName={"Pants fashion"} price1={"$55"} price2={"$44.99"}/>
                      </div>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Seller