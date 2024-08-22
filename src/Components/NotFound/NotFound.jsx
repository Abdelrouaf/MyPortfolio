import React from 'react'
import { Link } from 'react-router-dom'
import pageNotFound from '../../images/error2.png'
import './_NotFound.scss'

export default function NotFound() {

    return (
        <>
        
            <div className="error">
            
                {/* <h3 style={{fontSize: `100px`, fontWeight: `900`, lineHeight: `.8`, color: `#aaa`, margin: `-11px 0 0`}}>Page not found</h3> */}
            
                <div className="image">
                
                    <img src={pageNotFound} alt="" />
                
                </div>
            
                <div className='d-flex justify-content-center align-items-center'>
                
                    <p className='text-center w-75'>The page you are looking for could not be found. The link to this address may be outdated or we may have moved the since you last bookmarked it.</p>
                
                </div>
            
                <Link to='/' className='btn primaryBtn mt-4'>go back</Link>
            
            </div>
        
        </>
    )
}
