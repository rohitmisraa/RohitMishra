import React from 'react'

export default function Settings() {
    return (
        <div className='w-full'>
            <div className='w-full h-44 py-5 bg-white border-[1px] border-gray-200 shadow-sm rounded-lg lg:col-span-1'>
                <span className='text-secondary-dark text-lg rounded-lg ml-5'>SETTINGS</span>
                <div className='flex'>
                    <div className='h-8 w-1 bg-primary mt-2 rounded-lg'></div>
                    <a href='/account' className='w-full'><button type="button" class="text-secondary-black hover:bg-secondary/25 w-full focus:ring-4 focus:outline-none  font-medium text-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-4 w-4 mr-2" fill="currentColor" ><path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z" /></svg>
                        Profile
                    </button></a>
                </div>
                <div className='flex'>
                    <div className='h-8 w-1 mt-2 rounded-lg'></div>
                    <a href='/security' className='w-full'><button type="button" class="text-secondary-black hover:bg-secondary/25 w-full focus:ring-4 focus:outline-none  font-medium text-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-4 w-4 mr-2" fill="currentColor"><path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z" /></svg>
                        Security
                    </button></a>
                </div>
            </div>
            <div className='w-full h-44 py-5 bg-white border-[1px] border-gray-200 shadow-sm rounded-lg lg:col-span-1 mt-3'>
                <span className='text-secondary-dark text-lg rounded-lg ml-5'>BILLING</span>
                <div className='flex'>
                    <div className='h-8 w-1 mt-2 rounded-lg'></div>
                    <a href='/plans' className='w-full'><button type="button" class="text-secondary-black hover:bg-secondary/25 w-full focus:ring-4 focus:outline-none  font-medium text-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-4 w-4 mr-2" fill="currentColor"><path d="M112 112C112 50.14 162.1 0 224 0C285.9 0 336 50.14 336 112V160H400C426.5 160 448 181.5 448 208V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V208C0 181.5 21.49 160 48 160H112V112zM160 160H288V112C288 76.65 259.3 48 224 48C188.7 48 160 76.65 160 112V160zM136 256C149.3 256 160 245.3 160 232C160 218.7 149.3 208 136 208C122.7 208 112 218.7 112 232C112 245.3 122.7 256 136 256zM312 208C298.7 208 288 218.7 288 232C288 245.3 298.7 256 312 256C325.3 256 336 245.3 336 232C336 218.7 325.3 208 312 208z" /></svg>
                        Plans
                    </button></a>
                </div>
                <div className='flex'>
                    <div className='h-8 w-1 mt-2 rounded-lg'></div>
                    <a href='/subscription' className='w-full'><button type="button" class="text-secondary-black hover:bg-secondary/25 w-full focus:ring-4 focus:outline-none  font-medium text-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-4 w-4 mr-2" fill="currentColor"><path d="M512 32C547.3 32 576 60.65 576 96V128H0V96C0 60.65 28.65 32 64 32H512zM576 416C576 451.3 547.3 480 512 480H64C28.65 480 0 451.3 0 416V224H576V416zM112 352C103.2 352 96 359.2 96 368C96 376.8 103.2 384 112 384H176C184.8 384 192 376.8 192 368C192 359.2 184.8 352 176 352H112zM240 384H368C376.8 384 384 376.8 384 368C384 359.2 376.8 352 368 352H240C231.2 352 224 359.2 224 368C224 376.8 231.2 384 240 384z" /></svg>
                        Subscription
                    </button></a>
                </div>
            </div>
        </div>
    )
}
