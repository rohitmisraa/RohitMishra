import React from 'react'
import Header from '../Components/logHeader'
import Footer from '../Components/footer'


export default function Dashboard() {
    return (
        <div>
            <Header />
            <div className='min-h-screen pb-20 w-full bg-slate-50'>
                <div className='h-36'></div>
                <h1 className='text-center text-3xl'>This is the dashboard</h1>
                <div className='border-[1px] border-secondary-dark/20 pb-2 rounded-lg w-48 m-auto bg-white'>
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
            </div>
            <Footer />
        </div>
    )
}
