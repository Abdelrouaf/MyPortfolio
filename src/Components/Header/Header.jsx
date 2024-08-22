import React, { useEffect, useState } from 'react'
import PersonalInformation from '../Apis/PersonalInformation.json'
import './_Header.scss'
import { Link } from 'react-router-dom'

export default function Header() {

    // change navbar background color when scroll down
    let [navbarColor, setNavbarColor] = useState(false)

    function changeNavbarColor () {
        if (window.scrollY >= 90) {
            setNavbarColor(true);
        } else {
            setNavbarColor(false);
        }
    }

    window.addEventListener('scroll', changeNavbarColor)

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const { logo } = PersonalInformation[0];

    return (
    
        <>
        
            <header className="header">
            
                <nav className={ navbarColor ? "navbar navbar-expand-md d-sm-none d-md-block bg-body-tertiary boxShadow" : "navbar navbar-expand-md d-sm-none d-md-block bg-transparent" }>
                
                    <div className="container">
                    
                        <div className="d-flex justify-content-between align-items-center w-100">
                        
                            <div className="logo">
                            
                                <Link className="navbar-brand" onClick={scrollToTop} to="/"><img src={logo} width={100} alt="" /></Link>
                            
                            </div>
                        
                            <div className="menuBtn">
                            
                                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button> */}
                            
                            </div>
                        
                            <div className="collapse navbar-collapse text-end justify-content-end" id="navbarSupportedContent">
                            
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                
                                    <li className="nav-item">
                                    
                                        <Link className="nav-link" aria-current="page" to="/#brief">featured</Link>
                                    
                                    </li>
                                    
                                    <li className="nav-item">
                                    
                                        <Link className="nav-link" to="/#work">service</Link>
                                    
                                    </li>
                                
                                    <li className="nav-item">
                                    
                                        <Link className="nav-link" to='/work'>work</Link>
                                    
                                    </li>
                                
                                    <li className="nav-item">
                                    
                                        <Link className="nav-link" to='/contact'>contact</Link>
                                    
                                    </li>
                                
                                </ul>
                            
                            </div>
                        
                        </div>
                    
                    </div>
                
                </nav>
            
            </header>
        
        </>

)

}