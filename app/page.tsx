import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import Faq from './components/Faq'
import Pricing from './components/Pricing'
import Cta from './components/Cta'
import Footer from './components/Footer'

function page() {
  return (
    <div>
      < Nav />
      < Hero />
      <div className='px-[20px] lg:container lg:px-20 mx-auto'>
      < Features />
      <Faq />
      <Pricing />
      <Cta />
      <Footer />
      </div>

    </div>
  )
}

export default page