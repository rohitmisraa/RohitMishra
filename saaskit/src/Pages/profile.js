import React from 'react'
import Header from '../Components/logHeader'
import Footer from '../Components/footer'


export default function Dashboard() {
    return (
        <div>
            <Header />
            <div className='min-h-screen pb-20 w-full bg-slate-50'>
                <div className='h-36'></div>
                <div className='w-full px-5 lg:px-20 md:px-10 grid lg:grid-cols-6 lg:space-x-5'>
                    <div className='w-full h-96 text-center bg-white border-[1px] border-gray-200 shadow-sm rounded-lg lg:col-span-2'>
                        <img className='h-28 w-28 rounded-full mt-20 m-auto' src="/assets/profile.jpg" alt="Profile pic" />
                        <h3 className='text-2xl font-medium text-center my-2'>Rohit Mishra</h3>
                        <button class="py-1 px-5 bg-secondary m-auto text-center text-secondary-black text-lg rounded-lg">Free Plan</button>
                    </div>
                    <div className='w-full h-96 mt-5 lg:mt-0 bg-white border-[1px] border-gray-200 shadow-sm rounded-lg lg:col-span-4'>
                    <h3 className='text-2xl font-medium text-center mt-5'>Profile information will be here</h3>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
