import React, { useState } from 'react'
import Works from '../../Apis/Works.json'
import PersonalInformation from '../../Apis/PersonalInformation.json'
import "./_Work.scss"
import { Link, useNavigate } from 'react-router-dom';

export default function Work() {

    const [dataWork, setDataWork] = useState(Works);

    const { id, logo, name, email, phone, address, profileImg, profilePic, title, brief, smallBrief, facebookURL, instagramURL, whatsappURL, linkedinURL, githubURL, skills, skillsName } = PersonalInformation[0];

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
                    
                        {dataWork.map( (Works, index) =>  (
                        
                                <div className="col-lg-6" key={index}>
                                
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
                        
                            ) )}
                    
                    </div>
                
                    <div className="btns d-flex justify-content-center gap-2 d-md-none">
                                
                        <Link onClick={() => { navigate(-1) }} className='smallScreenBtn'>Back (Skills)</Link>
                    
                        <Link to='/navigate' className='smallScreenBtn'>Navigate</Link>
                    
                    </div>
                
                </div>
            
            </section>
        
            <div className='d-md-block d-none'>
            
            <section className="contact2 section d-md-block d-none">
                <div className="container">
                    <div className="infoTitles text-center d-md-block d-none">
                        <span className="headTitle">contact</span>
                        <h3 className="subTitle">let's discuss your <span className="changeColor">project</span></h3>
                        <p className="paragraph">Let's make something new, different and more meaningful or make things move visual or conceptual</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-lg-4">
                            <div className="box linkedIn">
                                <a target='_blank' rel="noopener noreferrer" href={linkedinURL}>LinkedIn</a>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="box github">
                                <a target='_blank' rel="noopener noreferrer" href={githubURL}>Github</a>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="box gmail">
                                <a target='_blank' rel="noopener noreferrer" href={`mailto:${email}`}>{email}</a>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="box whatsapp">
                                <a target='_blank' rel="noopener noreferrer" href={whatsappURL}>Whatsapp</a>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="box phone">
                                <a target='_blank' rel="noopener noreferrer" href={`tel:+${phone}`}>+{phone}</a>
                            </div>
                        </div>
                    </div>

                    <div className="btns d-flex justify-content-center gap-2 d-md-none">
                        <a href='/info' className='smallScreenBtn'>Back (Info)</a>
                        <a href='/skills' className='smallScreenBtn'>Next (Skills)</a>
                    </div>
                </div>
            </section> 
            
            </div>
        
        </>
    )
}
