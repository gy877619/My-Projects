import React from 'react'
import Hero from './Hero'
import Delivery from './Delivery'
import TopPicks from './TopPicks'

const Home = ({handleClick}) => {
  return (
    <>
    <Hero/>
    <Delivery/>
    <TopPicks handleClick={handleClick}/>
    </>
  )
}

export default Home