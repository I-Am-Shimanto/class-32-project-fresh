import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/home/banner'
import Collection from '../components/home/Collection'
import Fashion from '../components/home/Fashion'
import Seller from '../components/home/Seller'

const Home = () => {
  return (
      <>
          <Navbar />
          <Banner />
          <Collection />
          <Fashion />
          <Seller/>
      </>
  )
}

export default Home