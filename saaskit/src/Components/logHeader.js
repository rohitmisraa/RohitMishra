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
      <nav class="bg-white shadow transition-all fixed z-30 w-full 2xl:max-w-[1550px]">
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
            <a href='/account'><button class="px-4 text-secondary-dark hover:bg-secondary text-base rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  class="h-7 w-7" fill="currentColor" >
                <path d="M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z"/></svg>
                </button></a>
            <a href='/account'><button class="px-4 h-8 w-8 bg-primary hover:bg-blue-700 text-white text-base rounded-full"></button></a>
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
            <a href='/'><button class="py-2 px-5 font-bold hover:bg-blue-700 hover:text-white text-blue-600 text-base text-left w-full">Notification</button></a>
            <a href='/'><button class="py-2 px-5 font-bold hover:bg-blue-700 hover:text-white text-blue-600 text-base text-left w-full">Account</button></a>
          </div>
        </div>
      </nav>
    </div>

  )
}
