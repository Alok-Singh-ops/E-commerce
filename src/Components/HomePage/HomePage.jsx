import React from 'react'
import MainCategories from './MainCategories'
import MainSection from './MainSection'
import Navbar from './Navbar'
import TopPicks from './TopPicks'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <MainSection/>
      <MainCategories/>
      <TopPicks/>
      <Footer/>
    </div>
  )
}

export default HomePage