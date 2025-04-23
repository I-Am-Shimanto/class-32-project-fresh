import React from 'react'
import { IoIosStar } from "react-icons/io";


const SellerCard = ({image , productName , price1 , price2}) => {
  return (
      <>
        <div className="img">
            <img className="" src={image} alt="" />
            <div className="text bg-white pt-4 pl-5 pb-2.5">
                <div className="flex gap-2">
                    <IoIosStar className='text-yellow-400'/>
                    <IoIosStar className='text-yellow-400'/>
                    <IoIosStar className='text-yellow-400'/>
                    <IoIosStar className='text-yellow-400'/>
                    <IoIosStar className='text-yellow-400'/>
                </div>
                  <h3 className="text-2xl font-semibold text-black py-3">{productName}</h3>
                <div className="flex gap-8">
                    <p className="text-2xl font-normal text-gray-300">{price1}</p>
                    <p className="text-2xl font-normal text-black">{price2}</p>
                </div>
            </div>
        </div>
      </>
  )
}

export default SellerCard