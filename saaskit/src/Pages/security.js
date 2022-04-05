import React from 'react'
import Header from '../Components/logHeader'
import Footer from '../Components/footer'
import Settings from '../Components/settings'


export default function Security() {
    return (
        <div className='w-full bg-slate-50'>
            <div className='2xl:max-w-[1550px] m-auto'>
                <Header />
                <div className='min-h-screen pb-20 w-full bg-slate-50'>
                    <div className='h-28'></div>
                    <div className='w-full px-5 lg:px-20 md:px-10 grid lg:grid-cols-5 lg:space-x-5'>
                        <Settings />
                        <div className='w-full mt-5 p-5 lg:mt-0 bg-white border-[1px] border-gray-200 shadow-sm rounded-lg lg:col-span-4'>
                            <h3 className='text-xl font- text-secondary-black mb-2'>Rohit Mishra's Security</h3>
                            <div className='h-[1px] w-full bg-secondary-dark/20'></div>
                            <div className='w-full'>
                                <div className='max-w-[450px] pt-10'>
                                    <form autoComplete='off'>
                                        <div className="mb-6">
                                            <label htmlFor="Password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Current Password</label>
                                            <input type="Password" id="Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="NewPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">New Password</label>
                                            <input type="NewPassword" id="NewPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="CPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm Password</label>
                                            <input type="CPassword" id="CPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>
                                        <button type="submit" className="text-white bg-primary float-right hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-28 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
