import React, { useEffect, useState } from 'react'
import Works from '../Apis/Works.json'
import PersonalInformation from '../Apis/PersonalInformation.json'
import './_Project.scss'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Project() {

    const { id } = useParams();

    const item = Works.find(item => item.id === parseInt(id));

    const { email, phone, whatsappURL, linkedinURL, githubURL } = PersonalInformation[0];

    let navigate = useNavigate();

    return (
    
        <>
        
            {item ?
            
                <section className="viewProject section">
        
                    <div className="container">
                    
                        <div className="projectDetails">
                        
                            <div className="image">
                            
                                <Link target='_blank' to={item.liveDemo}><img src={item.imageCover} alt="" /></Link>
                            
                                <div className="demo">
                                
                                    <i className="fa-solid fa-play"></i>
                                
                                </div>
                            
                            </div>
                        
                            <h4 className="title">{item.title}</h4>
                        
                            <p className="description">{item.description}</p>
                        
                            <h4 className="technologies">Technologies used: <span>{item.technologies}</span></h4>
                        
                            <div className="shots">
                            
                                <div className="shotTitle">
                                
                                    <h4>shots</h4>
                                
                                </div>
                            
                            </div>
                        
                            <div className="text-center">
                            
                                <Link to='/work' className='primaryBtn'>explore all works</Link>
                            
                            </div>
                        
                        </div>
                    
                        <div className="btns d-flex justify-content-center gap-2 d-md-none">
                        
                            <Link onClick={() => { navigate(-1) }} className='smallScreenBtn'>Back (Projects)</Link>
                        
                            <Link to='/navigate' className='smallScreenBtn'>Navigate</Link>
                        
                        </div>
                    
                    </div>
                
                </section>
            
                : <div className='section container'>Item not found</div>}
                    
                    <section className="contact2 section d-md-block d-none">
                    
                        <div className="container">
                        
                            <div className="infoTitles text-center">
                                
                                    <span className="headTitle">contact</span>
                                
                                    <h3 className="subTitle">let's discuss your <span className="changeColor">project</span> </h3>
                                
                                    <p className="paragraph">Let's make something new, different and more meaningful or make thing move visual or conceptual</p>
                                
                            </div>
                        
                            <div className="row justify-content-center">
                            
                                <div className="col-lg-4">
                                
                                    <div className="box linkedIn">
                                    
                                        <Link target='_blank' to={linkedinURL}>LinkedIn</Link>
                                    
                                    </div>
                                
                                </div>
                            
                                <div className="col-lg-4">
                                
                                    <div className="box github">
                                        
                                        <Link target='_blank' to={githubURL}>Github</Link>
                                    
                                    </div>
                                
                                </div>
                            
                                <div className="col-lg-4">
                                
                                    <div className="box gmail">
                                        
                                        <Link target='_blank' to={`mailto:${email}`}>{email}</Link>
                                    
                                    </div>
                                
                                </div>
                            
                                <div className="col-lg-4">
                                
                                    <div className="box whatsapp">
                                        
                                        <Link target='_blank' to={whatsappURL}>Whatsapp</Link>
                                    
                                    </div>
                                
                                </div>
                            
                                <div className="col-lg-4">
                                
                                    <div className="box phone">
                                        
                                        <Link target='_blank' to={`tel:+${phone}`}>+{phone}</Link>
                                    
                                    </div>
                                
                                </div>
                            
                            </div>
                        
                        </div>
                    
                    </section>
        
        </>
    
    )
}
