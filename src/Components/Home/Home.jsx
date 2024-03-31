import React, { Fragment } from 'react'
import Header from '../Header/Header'
import HeroSection from '../HeroSection/HeroSection'
import Product from '../Product/Product'
import Whyus from '../Whyus/Whyus'
import ClientSection from '../clientsection/ClientSection'

const Home = () => {
  return (
  <Fragment>
      <Header/>
      <HeroSection/>
      <Product/>
      <Whyus/>
  </Fragment>
  )
}

export default Home