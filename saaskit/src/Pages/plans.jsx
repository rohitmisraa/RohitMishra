import React from 'react'
import Header from '../Components/logHeader'
import Footer from '../Components/footer'
import Settings from '../Components/settings'


export default function Plans() {
    return (
        <div className='w-full bg-slate-50'>
            <div className='2xl:max-w-[1550px] m-auto'>
                <Header />
                <div className='min-h-screen pb-20 w-full bg-slate-50'>
                    <div className='h-28'></div>
                    <div className='w-full px-5 lg:px-20 md:px-10 grid lg:grid-cols-5 lg:space-x-5'>
                        <Settings />
                        <div className='w-full mt-5 p-5 lg:mt-0 bg-white border-[1px] border-gray-200 shadow-sm rounded-lg lg:col-span-4'>
                            <h3 className='text-xl font- text-secondary-black mb-2'>Rohit Mishra's Plans</h3>
                            <div className='h-[1px] w-full bg-secondary-dark/20'></div>
                            <div className='w-full grid grid-cols-1 space-y-3 md:space-y-0 md:grid-cols-3 pt-5'>
                                <div class="p-3 max-w-[350px] m-auto xl:p-10 bg-white border-2 border-gray-300 w-full rounded-xl" id="payment-card">
                                    <h2 class="font-medium text-3xl">
                                        $ 49 <span class="font-normal text-xl">
                                            /month</span>
                                    </h2>
                                    <h3 class="font-medium text-3xl my-2">
                                        Base</h3>
                                    <p class="text-lg">
                                        For freelancers and developers, who want to easily create apps.</p>
                                    <div class="py-3">
                                        <span class="flex space-x-2 mb-2">
                                            <div class="bg-cl-blue rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="28" fill="#D3DEF0">
                                                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                                                </svg>
                                            </div>
                                            <span class="ml-4 text-lg">
                                                All premium components</span>
                                        </span>
                                        <span class="flex space-x-2 mb-2">
                                            <div class="bg-cl-blue rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="28" fill="#D3DEF0">
                                                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                                                </svg>
                                            </div>
                                            <span class="ml-4 text-lg">
                                                All premium blocks</span>
                                        </span>
                                        <span class="flex space-x-2 mb-2">
                                            <div class="bg-cl-blue rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="28" fill="#D3DEF0">
                                                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                                                </svg>
                                            </div>
                                            <span class="ml-4 text-lg">
                                                Special badge in forum</span>
                                        </span>
                                        <span class="flex space-x-2 mb-2">
                                            <div class="bg-cl-blue rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="28" fill="#D3DEF0">
                                                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                                                </svg>
                                            </div>
                                            <span class="ml-4 text-lg">
                                                Special support from staff</span>
                                        </span>
                                        <span class="flex space-x-2 mb-2">
                                            <div class="bg-cl-blue rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="28" fill="#D3DEF0">
                                                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                                                </svg>
                                            </div>
                                            <span class="ml-4 text-lg">
                                                All free features included</span>
                                        </span>
                                        <div class="w-full">
                                            <a href="#">
                                                <button class="py-2 px-12 bg-secondary-black text-white text-xl font-medium rounded-lg w-full">
                                                    Choose Plan</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>


                                <div class="p-3 xl:p-10 max-w-[350px] m-auto bg-  border-2 border-gray-300 w-full rounded-xl" id="payment-card">
                                    <h2 class="font-medium text-3xl">
                                        $ 49 <span class="font-normal text-xl">
                                            /month</span>
                                    </h2>
                                    <h3 class="font-medium text-3xl my-2">
                                        Base</h3>
                                    <p class="text-lg">
                                        For freelancers and developers, who want to easily create apps.</p>
                                    <div class="py-3">
                                        <span class="flex space-x-2 mb-2">
                                            <div class="bg-cl-blue rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="28" fill="#D3DEF0">
                                                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                                                </svg>
                                            </div>
                                            <span class="ml-4 text-lg">
                                                All premium components</span>
                                        </span>
                                        <span class="flex space-x-2 mb-2">
                                            <div class="bg-cl-blue rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="28" fill="#D3DEF0">
                                                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                                                </svg>
                                            </div>
                                            <span class="ml-4 text-lg">
                                                All premium blocks</span>
                                        </span>
                                        <span class="flex space-x-2 mb-2">
                                            <div class="bg-cl-blue rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="28" fill="#D3DEF0">
                                                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                                                </svg>
                                            </div>
                                            <span class="ml-4 text-lg">
                                                Special badge in forum</span>
                                        </span>
                                        <span class="flex space-x-2 mb-2">
                                            <div class="bg-cl-blue rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="28" fill="#D3DEF0">
                                                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                                                </svg>
                                            </div>
                                            <span class="ml-4 text-lg">
                                                Special support from staff</span>
                                        </span>
                                        <span class="flex space-x-2 mb-2">
                                            <div class="bg-cl-blue rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="28" fill="#D3DEF0">
                                                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                                                </svg>
                                            </div>
                                            <span class="ml-4 text-lg">
                                                All free features included</span>
                                        </span>
                                        <div class="w-full">
                                            <a href="#">
                                                <button class="py-2 px-12 bg-primary text-white text-xl font-medium rounded-lg w-full">
                                                    Choose Plan</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>


                                <div class="p-3 xl:p-10 max-w-[350px] m-auto md bg-white border-2 border-gray-300 w-full rounded-xl" id="payment-card">
                                    <h2 class="font-medium text-3xl">
                                        $ 49 <span class="font-normal text-xl">
                                            /month</span>
                                    </h2>
                                    <h3 class="font-medium text-3xl my-2">
                                        Base</h3>
                                    <p class="text-lg">
                                        For freelancers and developers, who want to easily create apps.</p>
                                    <div class="py-3">
                                        <span class="flex space-x-2 mb-2">
                                            <div class="bg-cl-blue rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="28" fill="#D3DEF0">
                                                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                                                </svg>
                                            </div>
                                            <span class="ml-4 text-lg">
                                                All premium components</span>
                                        </span>
                                        <span class="flex space-x-2 mb-2">
                                            <div class="bg-cl-blue rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="28" fill="#D3DEF0">
                                                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                                                </svg>
                                            </div>
                                            <span class="ml-4 text-lg">
                                                All premium blocks</span>
                                        </span>
                                        <span class="flex space-x-2 mb-2">
                                            <div class="bg-cl-blue rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="28" fill="#D3DEF0">
                                                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                                                </svg>
                                            </div>
                                            <span class="ml-4 text-lg">
                                                Special badge in forum</span>
                                        </span>
                                        <span class="flex space-x-2 mb-2">
                                            <div class="bg-cl-blue rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="28" fill="#D3DEF0">
                                                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                                                </svg>
                                            </div>
                                            <span class="ml-4 text-lg">
                                                Special support from staff</span>
                                        </span>
                                        <span class="flex space-x-2 mb-2">
                                            <div class="bg-cl-blue rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="28" fill="#D3DEF0">
                                                    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                                                </svg>
                                            </div>
                                            <span class="ml-4 text-lg">
                                                All free features included</span>
                                        </span>
                                        <div class="w-full">
                                            <a href="#">
                                                <button class="py-2 px-12 bg-secondary-black text-white text-xl font-medium rounded-lg w-full">
                                                    Choose Plan</button>
                                            </a>
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
