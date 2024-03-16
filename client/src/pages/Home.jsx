import React from 'react'
import { Hero } from '../components/Hero'
import HomeSectionsBar from '../components/HomeSectionsBar'

const Home = () => {
  return (
    <div className='sm:max-w-[1200px] mx-auto'>
        <Hero/>
        <HomeSectionsBar/>
    </div>
  )
}

export default Home