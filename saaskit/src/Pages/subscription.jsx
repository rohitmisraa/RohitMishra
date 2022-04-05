import React from 'react'
import Header from '../Components/logHeader'
import Footer from '../Components/footer'
import Settings from '../Components/settings'


export default function Subscription() {
    return (
        <div className='w-full bg-slate-50'>
            <div className='2xl:max-w-[1550px] m-auto'>
                <Header />
                <div className='min-h-screen pb-20 w-full bg-slate-50'>
                    <div className='h-28'></div>
                    <div className='w-full px-5 lg:px-20 md:px-10 grid lg:grid-cols-5 lg:space-x-5'>
                        <Settings />
                        <div className='w-full mt-5 p-1 sm:p-5 lg:mt-0 bg-white border-[1px] border-gray-200 shadow-sm rounded-lg lg:col-span-4'>
                            <h3 className='text-xl text-secondary-black mb-2'>Rohit Mishra's Subscription</h3>
                            <div className='h-[1px] w-full bg-secondary-dark/20'></div>
                            <div className='w-full'>
                                <h3 className='text-lg text-secondary-black my-2'>Current Plan</h3>
                                <span className='text-base text-secondary-black '>Plan 2 - $150 USD/mo</span>
                                <div className='w-full border-2 border-secondary-dark/20 rounded-lg overflow-hidden grid grid-cols-2 sm:grid-cols-3 mt-2'>
                                    <div className='p-2 w-full flex'>
                                        <div className='w-full h-full'>
                                            <p className='text-base text-secondary-black w-full'>$ 150 on Apr 02, 2020</p>
                                            <p className='text-sm text-secondary-black'>Next Payment</p>
                                        </div>
                                        <div className='w-[2px] h-10 bg-secondary-dark/40 mt-1'></div>
                                    </div>
                                    <div className='p-2 w-full flex'>
                                        <div className='w-full h-full'>
                                            <p className='text-base text-secondary-black w-full'>Started</p>
                                            <p className='text-sm text-secondary-black'>Jan 02, 2019</p>
                                        </div>
                                        <div className='w-[2px] h-10 bg-secondary-dark/40 mt-1 hidden sm:block'></div>
                                    </div>
                                    <div className='p-2 w-full flex col-span-2 sm:col-span-1'>
                                        <div className='w-full h-full flex sm:block'>
                                            <p className='text-base text-secondary-black sm:w-full w-40'>Coupon</p>
                                            <p className='text-base text-primary w-full'>Add coupon</p>
                                        </div>
                                    </div>
                                </div>


                                <p className='text-lg text-secondary-black mt-6'>Plan information</p>
                                <div className='w-full border-2 border-blue-100 bg-secondary rounded-lg overflow-hidden grid grid-cols-3 mt-2'>
                                    <div className='p-2 w-full flex col-span-2 sm:col-span-1'>
                                        <div className='w-full h-full'>
                                            <p className='text-base text-secondary-black w-full'>Standard Monthly Subs</p>
                                            <p className='text-sm text-secondary-black'>$ 150 USD/ month</p>
                                        </div>
                                    </div>
                                    <div className='p-2 w-20 sm:w-full flex col-span-1'>
                                        <div className='w-full h-full'>
                                            <p className='text-base text-secondary-black w-full'>x1</p>
                                        </div>
                                    </div>
                                    <div className='p-2 w-full hidden sm:flex'>
                                        <div className='w-full h-full'>
                                            <p className='text-base text-secondary-black w-full'>$150 USD/ month</p>
                                        </div>
                                    </div>
                                </div>


                                <p className='text-lg text-secondary-black mt-6'>Payment Method</p>
                                <div className='w-full border-2 border-secondary-dark/20 rounded-lg overflow-hidden grid grid-cols-3 mt-2'>
                                    <div className='p-2 w-full'>
                                        <div className='w-full h-full'>
                                            <p className='text-base text-secondary-black w-full'>VISA   ****4242</p>
                                        </div>
                                    </div>
                                    <div className='p-2 w-full'>
                                        <div className='w-full h-full'>
                                            <p className='text-base text-secondary-black w-full'>Expires: 05/22</p>
                                        </div>
                                    </div>
                                    <div className='p-2 w-full'>
                                        <div className='w-full h-full'>
                                            <button className='text-lg float-right font-semibold text-primary w-full'>Update</button>
                                        </div>
                                    </div>
                                </div>


                                <p className='text-lg text-secondary-black mt-6'>Payment receipt </p>
                                <div className='w-full border-2 border-secondary-dark/20 rounded-lg overflow-hidden mt-2'>
                                    <table className='w-full'>
                                        <tr className='w-full grid grid-cols-4 text-left p-2 text-lg border-secondary-dark/20 border-b-2 bg-secondary'>
                                            <th className='w-full text-secondary-black font-medium'>Amount</th>
                                            <th className='w-full text-secondary-black font-medium'>Status</th>
                                            <th className='w-full text-secondary-black font-medium'>Due</th>
                                            <th className='w-full text-secondary-black font-medium'>Receipt</th>
                                        </tr>
                                        <tr className='w-full grid grid-cols-4 text-left p-2 border-secondary-dark/20 border-b-2'>
                                            <td className='w-full'>$ 150</td>
                                            <td className='w-12 rounded-lg text-center bg-green-200'>PAID</td>
                                            <td className='w-full'>2020-03-02</td>
                                            <td className='w-full'>
                                                <button type="button" class="text-primary text-left focus:ring-blue-300 font-medium rounded-lg text-base hover:text-blue-800 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    Download 
                                                    <span className='sm:block hidden'><svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                        </span>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className='w-full grid grid-cols-4 text-left p-2 border-secondary-dark/20 border-b-2'>
                                            <td className='w-full'>$ 150</td>
                                            <td className='w-12 rounded-lg text-center bg-green-200'>PAID</td>
                                            <td className='w-full'>2020-03-02</td>
                                            <td className='w-full'>
                                                <button type="button" class="text-primary text-left focus:ring-blue-300 font-medium rounded-lg text-base hover:text-blue-800 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    Download 
                                                    <span className='sm:block hidden'><svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                        </span>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className='w-full grid grid-cols-4 text-left p-2 border-secondary-dark/20 border-b-2'>
                                            <td className='w-full'>$ 150</td>
                                            <td className='w-12 rounded-lg text-center bg-green-200'>PAID</td>
                                            <td className='w-full'>2020-03-02</td>
                                            <td className='w-full'>
                                                <button type="button" class="text-primary text-left focus:ring-blue-300 font-medium rounded-lg text-base hover:text-blue-800 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    Download 
                                                    <span className='sm:block hidden'><svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                        </span>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className='w-full grid grid-cols-4 text-left p-2 border-secondary-dark/20 border-b-2'>
                                            <td className='w-full'>$ 150</td>
                                            <td className='w-12 rounded-lg text-center bg-green-200'>PAID</td>
                                            <td className='w-full'>2020-03-02</td>
                                            <td className='w-full'>
                                                <button type="button" class="text-primary text-left focus:ring-blue-300 font-medium rounded-lg text-base hover:text-blue-800 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    Download 
                                                    <span className='sm:block hidden'><svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                        </span>
                                                </button>
                                            </td>
                                        </tr>
                                    </table>
                                    <div className='flex w-full bg-secondary'>
                                        <div className='p-2 w-full'>
                                            <div className='w-full h-full'>
                                                <p className='text-base text-secondary-black w-full'>Page 1/1</p>
                                            </div>
                                        </div>
                                        <div className='p-2 w-full'>
                                            <div className='w-full h-full'>
                                                <button type="button" class="text-primary px-3 text-left float-right focus:ring-blue-300 font-medium rounded-lg text-base hover:text-blue-800 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z" /></svg>
                                                </button>
                                                <button type="button" class="text-primary px-3 text-left float-right focus:ring-blue-300 font-medium rounded-lg text-base hover:text-blue-800 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z" /></svg>
                                                </button>

                                            </div>
                                        </div>
                                    </div>
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
