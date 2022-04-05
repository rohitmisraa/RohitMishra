import React, { useState } from 'react';

export default function Header() {
  const [menu, setMenu] = useState(false);

  function sidemenu() {
    if (menu) {
      setMenu(false);
    }else{
      setMenu(true);
    }
  }
  return (

    <div>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <nav class="bg-white shadow transition-all fixed z-30 w-full max-h-20 2xl:max-w-[1550px]">
        <div className='w-full max-h-18 px-5 lg:px-20 md:px-10 py-5 flex justify-between'>
          <div className='flex'>
            <div className='h-8 w-12'>
              <div className='h-8 w-8 border-4 border-primary rounded-full'></div>
              <div className='h-8 w-8 border-4 border-primary rounded-full relative left-3 bottom-8'></div>
            </div>
            <h3 className='text-xl font-medium mt-1 font-inter'>Rohitam</h3>
          </div>
          <div class="md:hidden h-8">
                        <button class="text-secondary-black focus:outline-none" onClick={sidemenu}>
                            <svg class="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </svg>
                        </button>
                    </div>
          <div className='hidden md:flex space-x-2'>
            <a href='/dashboard'><button class="py-1 px-4 text-secondary-dark hover:bg-secondary text-base rounded-lg">Product</button></a>
            <a href='/'><button class="py-1 px-4 text-secondary-dark hover:bg-secondary text-base rounded-lg">Pricing</button></a>
            <a href='/'><button class="py-1 px-4 text-secondary-dark hover:bg-secondary text-base rounded-lg">More</button></a>
            <div className='h-5 w-[1px] mt-2 bg-gray-300'></div>
            <a href='/login'><button class="py-1 px-4 text-secondary-dark hover:bg-secondary text-base rounded-lg">Login</button></a>
            <a href='/signup'><button class="py-1 px-5 bg-primary hover:bg-blue-700 text-white text-base rounded-lg">Sign Up</button></a>
          </div>
          <div  style={{ right: menu ? '0px' : '-300px' }} className='block h-screen fixed w-60 bg-gray-200 top-0 right-0 z-30'>
            <button class="text-secondary-black focus:outline-none mb-6 mt-3" onClick={sidemenu}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"  class="h-10 w-10" fill="currentColor" >
              <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
            </button>
            <a href='/'><button class="py-2 px-5 font-bold hover:bg-blue-700 hover:text-white text-blue-600 text-base text-left w-full">Home</button></a>
            <a href='/'><button class="py-2 px-5 font-bold hover:bg-blue-700 hover:text-white text-blue-600 text-base text-left w-full">Product</button></a>
            <a href='/'><button class="py-2 px-5 font-bold hover:bg-blue-700 hover:text-white text-blue-600 text-base text-left w-full">Pricing</button></a>
            <a href='/'><button class="py-2 px-5 font-bold hover:bg-blue-700 hover:text-white text-blue-600 text-base text-left w-full">More</button></a>
            <div className='h-[2px] w-full bg-gray-300 my-4'></div>
            <a href='/'><button class="py-2 px-5 font-bold hover:bg-blue-700 hover:text-white text-blue-600 text-base text-left w-full">Login</button></a>
            <a href='/'><button class="py-2 px-5 font-bold bg-primary hover:bg-blue-700 hover:text-white text-white text-base text-left w-full">Sign Up</button></a>
          </div>
        </div>

        <div className='border-[1px] border-secondary-dark/20 pb-2 rounded-lg float-right mr-14 hidden smd:block w-48 m-auto bg-white'>
                    <div className='w-full p-3 pb-2'>
                        <h3 className='text-base font-semibold'>Rohit Mishra</h3>
                        <button class="px-1 py-1 bg-secondary m-auto text-center font-semibold text-secondary-black text-xs rounded-lg">Free Plan</button>
                    </div>
                    <div className='w-full h-[1px] mt-2 bg-secondary-dark/30'></div>
                    <a href='/profile' className='w-full'><button type="button" class="text-secondary-black hover:bg-secondary/25 w-full focus:ring-4 focus:outline-none  text-base text-left px-3 py-1 inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2">
                        My Profile
                    </button></a>
                    <a href='/Settings' className='w-full'><button type="button" class="text-secondary-black hover:bg-secondary/25 w-full focus:ring-4 focus:outline-none  text-base text-left px-3 py-1 inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2">
                        Settings
                    </button></a>
                    <div className='w-full h-[1px] mt-2 bg-secondary-dark/30'></div>
                    <a href='/Settings' className='w-full'><button type="button" class="text-secondary-black hover:bg-secondary/25 w-full focus:ring-4 focus:outline-none  text-base text-left px-3 py-1 inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2">
                        Sign Out
                    </button></a>
                </div>
      </nav>
    </div>

  )
}
