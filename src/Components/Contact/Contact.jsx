import React, { useState } from 'react'
import PersonalInformation from '../Apis/PersonalInformation.json'
import { Link } from 'react-router-dom'
import '../Home/_Home.scss'

export default function Contact() {

    const { email, phone, whatsappURL, linkedinURL, githubURL } = PersonalInformation[0];

    return (
        <>
        
            <section className="contact2 section">
            
                <div className="container">
                
                    <div className="infoTitles text-center d-md-block d-none">
                        
                            <span className="headTitle">contact</span>
                        
                            <h3 className="subTitle">let's discuss your <span className="changeColor">project</span> </h3>
                        
                            <p className="paragraph">Let's make something new, different and more meaningful or make thing move visual or conceptual</p>
                        
                    </div>
                
                    <div className="row justify-content-center">
                    
                        <div className="col-sm-6 col-lg-4">
                        
                            <div className="box linkedIn">
                            
                                <Link target='_blank' to={linkedinURL}>LinkedIn</Link>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-sm-6 col-lg-4">
                        
                            <div className="box github">
                                
                                <Link target='_blank' to={githubURL}>Github</Link>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-sm-6 col-lg-4">
                        
                            <div className="box gmail">
                                
                                <Link target='_blank' to={`mailto:${email}`}>{email}</Link>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-sm-6 col-lg-4">
                        
                            <div className="box whatsapp">
                                
                                <Link target='_blank' to={whatsappURL}>Whatsapp</Link>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-sm-6 col-lg-4">
                        
                            <div className="box phone">
                                
                                <Link target='_blank' to={`tel:+${phone}`}>+{phone}</Link>
                            
                            </div>
                        
                        </div>
                    
                    </div>
                
                    <div className="btns d-flex justify-content-center gap-2 d-md-none">
                    
                        <Link to='/info' className='smallScreenBtn'>Back (Info)</Link>
                    
                        <Link to='/skills' className='smallScreenBtn'>Next (Skills)</Link>
                    
                    </div>
                
                </div>
            
            </section>
        
        </>
    )
}
