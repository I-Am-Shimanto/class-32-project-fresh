import React from 'react'
import CollectionCard from './CollectionCard'

const Collection = () => {
  return (
      <>
          <section id="collection" className="my-25 mx-6">
              <div className="container mx-auto">
                  <div className="heading">
                      <h2 className="text-center text-4xl sm:text-6xl font-bold text-black">New Collection</h2>
                      <p className="text-center text-xl sm:text-2xl font-normal my-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div className="flex flex-col md:flex-row">
                      <CollectionCard image={"/collection_1.png"} name={"Sweater"}/>
                      <CollectionCard image={"/collection_2.png"} name={"Jeans"}/>
                      <CollectionCard image={"/collection_3.png"} name={"Baskets"}/>
                  </div>
              </div>
          </section>
      </>
  )
}

export default Collection