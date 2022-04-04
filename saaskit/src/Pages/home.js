import React from 'react'
import Header from '../Components/header'
import Footer from '../Components/footer'

export default function Home() {
  return (
    <div className='transition-all delay-700 2xl:max-w-[1550px] m-auto'>
    <Header />

    <div className='h-20'></div>
    <div className='w-full px-5 lg:px-20 md:px-10 grid grid-cols-1 md:grid-cols-2 min-h-screen'>
        <div className='w-full md:h-screen'>
            <h1 className='text-6xl text-primary font-extrabold font-inter mt-20 md:mt-60 xl:pr-10'>Start Crafting your next Idea</h1>
            <p className='text-secondary-dark text-base rounded-lg xl:pr-20 py-5'>This is a saas that will help you build and start fast. So let’s start a new journey by using this saas kit to build you saas future fast, easy and proffessionally.</p>
            <div className='flex space-x-3'>
                <button class="py-1 px-5 bg-primary hover:bg-blue-700 text-white text-lg rounded-lg">Explore</button>
                <button class="py-1 px-5 bg-secondary hover:bg-blue-700 text-primary text-lg rounded-lg">Learn more</button>

            </div>
        </div>
        <div className='w-full md:h-screen mt-10'>
            <img className='h-80 md:h-[450px] md:mt-28' src="/assets/home_s2.svg" alt="Home Image" />
        </div>
    </div>
    

    <Footer /></div>
  )
}
