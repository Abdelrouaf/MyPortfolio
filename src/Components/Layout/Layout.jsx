import React from 'react'
import Header from '../Header/Header'
import Header2 from '../Header2/Header2'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import './_Layout.scss'

export default function Layout() {
    return (
        <>
        
            <div className='d-none d-md-block'>
            
                <Header/>
            
                <Outlet></Outlet>
            
                <Footer/>
            
            </div>
        
            <div className='d-sm-block d-md-none centerPage'>
                
                <Header2/>
                
                <Outlet></Outlet>
            
                <Footer/>
            
            </div>
        
        </>
    )
}
