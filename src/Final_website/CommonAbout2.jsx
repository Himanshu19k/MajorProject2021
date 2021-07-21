import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import Web1 from './image1.svg'


function CommonAbout2(props) {
    return (
        <>
            {/* <section id='header' className='d-flex justify-content-center align-self-center'> */}
            <div className="container-fluid nav_bg about1">
                <div className="row" >
                    <div className="col-10 mx-auto " >
                        <div className="row">

                            <div className="col-md-6 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">
                                <h2 style={{fontWeight:'bold'}}>{props.title}</h2>
                                <p className='my-3 aboutp' >Here We provide best hospitality service to the patients for better convinience at one place. We have best hospitals and doctors with great experience and spciality. </p>
                                <hr />
                            </div>

                            <div className=" col-lg-6 order-1 order-lg-1 header-img " >
                                <img src={props.img} className='img-fluid aboutimg' alt='image' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </section> */}
        </>
    )
}

export default CommonAbout2

//  justify-content-center align-self-center