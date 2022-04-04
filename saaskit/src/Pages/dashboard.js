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
            </div>
            <Footer />
        </div>
    )
}
