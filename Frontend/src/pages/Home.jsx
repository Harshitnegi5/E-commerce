import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Bestseller from '../components/Bestseller'
import OurPolicy from '../components/OurPolicy'

const Home = () => {
  return (
    <>
      <Hero/>
      <LatestCollection/>
      <Bestseller/>
      <OurPolicy/>
    </>
  )
}

export default Home
