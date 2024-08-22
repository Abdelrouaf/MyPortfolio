import React, { useState } from 'react'
import Works from '../Apis/Works.json'
import PersonalInformation from '../Apis/PersonalInformation.json'
import "./_Work.scss"
import { Link, useNavigate } from 'react-router-dom';

export default function Work() {

    const [dataWork, setDataWork] = useState(Works);

    const [dataPersonalInformation, setDataPersonalInformation] = useState(PersonalInformation);

    let navigate = useNavigate()

    return (
        <>
        
            <section className='work section'>
            
                <div className="container">
                
                    <div className="infoTitles d-none d-md-block">
                    
                        <span className="headTitle">Work</span>
                    
                    </div>
                
                    <div className="boxShadow d-md-none d-block">

                        <span className="title">work</span>
                    
                    </div>
                
                    <div className="row align-items-baseline">
                    
                        {dataWork.map( (Works, key) => {
                        
                            return (
                        
                                <div className="col-lg-6" key={key}>
                                
                                    <Link to={`/project/${Works.id}`} className='view'>
                                    
                                        <div className="project">
                                        
                                            <div className="image">
                                            
                                                <img src={Works.imageCover} alt="" />
                                            
                                            </div>
                                        
                                            <h4 className="title">{Works.title}</h4>
                                        
                                            <h4 className="technologies">{Works.technologies}</h4>
                                        
                                        </div>
                                    
                                    </Link>
                                
                                </div>
                        
                            )
                            
                        } )}
                    
                    </div>
                
                    <div className="btns d-flex justify-content-center gap-2 d-md-none">
                                
                        <Link onClick={() => { navigate(-1) }} className='smallScreenBtn'>Back (Skills)</Link>
                    
                        <Link to='/navigate' className='smallScreenBtn'>Navigate</Link>
                    
                    </div>
                
                </div>
            
            </section>
        
            <div className='d-md-block d-none'>
            
                {dataPersonalInformation.map( (PersonalInformation, key) => {
                
                    return (
                    
                        <section className="contact2 section d-md-block d-none" key={key}>
                        
                            <div className="container">
                            
                                <div className="infoTitles text-center">
                                    
                                        <span className="headTitle">contact</span>
                                    
                                        <h3 className="subTitle">let's discuss your <span className="changeColor">project</span> </h3>
                                    
                                        <p className="paragraph">Let's make something new, different and more meaningful or make thing move visual or conceptual</p>
                                    
                                </div>
                            
                                <div className="row justify-content-center">
                                
                                    <div className="col-lg-4">
                                    
                                        <div className="box linkedIn">
                                        
                                            <Link target='_blank' to={PersonalInformation.linkedinURL}>LinkedIn</Link>
                                        
                                        </div>
                                    
                                    </div>
                                
                                    <div className="col-lg-4">
                                    
                                        <div className="box github">
                                            
                                            <Link target='_blank' to={PersonalInformation.githubURL}>Github</Link>
                                        
                                        </div>
                                    
                                    </div>
                                
                                    <div className="col-lg-4">
                                    
                                        <div className="box gmail">
                                            
                                            <Link target='_blank' to={`mailto:${PersonalInformation.email}`}>{PersonalInformation.email}</Link>
                                        
                                        </div>
                                    
                                    </div>
                                
                                    <div className="col-lg-4">
                                    
                                        <div className="box whatsapp">
                                            
                                            <Link target='_blank' to={PersonalInformation.whatsappURL}>Whatsapp</Link>
                                        
                                        </div>
                                    
                                    </div>
                                
                                    <div className="col-lg-4">
                                    
                                        <div className="box phone">
                                            
                                            <Link target='_blank' to={`tel:+${PersonalInformation.phone}`}>+{PersonalInformation.phone}</Link>
                                        
                                        </div>
                                    
                                    </div>
                                
                                </div>
                            
                            </div>
                        
                        </section>  
                    
                    )
                
                } )}
            
            </div>
        
        </>
    )
}
