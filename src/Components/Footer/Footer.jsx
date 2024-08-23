import React from 'react'
import './_Footer.scss'

export default function Footer() {

    return (
    
        <footer className="footer">
        
            <div className="container">
            
                <div className="d-flex justify-content-between">

                    <div className="designedBy">
                    
                        <h4>Designed by Abdelraouf Halaby</h4>
                    
                    </div>
                
                    <div className="social">
                    
                        <a target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/abdelrouaf.halaby'><i className="fa-brands fa-facebook-f"></i></a>
                    
                        <a target='_blank' rel="noopener noreferrer" href='https://github.com/Abdelrouaf'><i className="fa-brands fa-github"></i></a>
                    
                        <a target='_blank' rel="noopener noreferrer" href='https://wa.me/+201154812462'><i className="fa-brands fa-whatsapp"></i></a>
                    
                        <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/abdelraouf-halaby-578913235/'><i className="fa-brands fa-linkedin-in"></i></a>
                    
                    </div>
                
                </div>
            
            </div>
        
        </footer>
    
    )
}
