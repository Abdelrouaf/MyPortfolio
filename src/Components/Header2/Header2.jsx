import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './_Header2.scss'

export default function Header2() {

    // var pathArray = window.location.pathname.split( '/' );
    // var lastDirectory = pathArray[pathArray.length-1];

    // if (lastDirectory.length <= 0) {
    //     lastDirectory = 'Welcome';
    // } else {
    //     pathArray = window.location.pathname.split( '/' );
    //     lastDirectory = pathArray[pathArray.length-1];
    // }


    const location = useLocation();
    const [lastDirectory, setLastDirectory] = useState('');
    
    useEffect(() => {
        // Split the path and get the last segment
        const pathArray = location.pathname.split('/');
        let lastDir = pathArray[pathArray.length - 1];
    
        // Check if the last segment is empty (e.g., if the URL ends with a '/')
        if (!lastDir) {
          lastDir = 'Welcome'; // Set your default value here
        }
    
        setLastDirectory(lastDir);
    
        }, [location]);

    return (
    
        <>
        
            <header className="header smallScreen d-sm-block d-md-none">
                
                <div className="container">
                    
                    <div className="d-flex align-items-baseline">
                    
                        <div className="logo">
                        
                            <Link className="navbar-brand" to="/"></Link>
                        
                        </div>
                    
                        <div className="navigate">
                        
                            <h4 className="navigateTitle">{lastDirectory}</h4>
                        
                        </div>
                    
                    </div>
            
                </div>
                
            </header>
        
        </>
    
    )
}
