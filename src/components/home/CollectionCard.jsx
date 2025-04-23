import React from 'react'

const CollectionCard = ({image , name}) => {
  return (
      <>
        <div className="img md:w-1/3 mx-6 my-5 md:my-0 relative">
            <img src={image} alt="" />
              <a className="absolute bottom-11 left-4 bg-white w-6/10 sm:w-2/4 md:w-7/10 text-center py-3 text-2xl text-normal rounded-2xl hover:bg-yellow-400 transition-all duration-300" href="#">{name}</a>
        </div>
      </>
  )
}

export default CollectionCard