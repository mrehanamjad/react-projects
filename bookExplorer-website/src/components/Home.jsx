import React from 'react'
import HeroSec from './HeroSec'
import Categories from './Categories'

function Home() {
  return (
    <div>
      <HeroSec />
      <Categories classNames='h-60' />
    </div>
  )
}

export default Home