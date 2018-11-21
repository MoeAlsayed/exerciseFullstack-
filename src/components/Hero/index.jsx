import React from 'react';
import './index.scss'
import { Button } from 'reactstrap';

const Hero = () => {
    return (
        <section className='hero'> 
            <div className="hero-content">
                <div className="logo">
                    <img src="/cloud-rain.svg" alt=""/>
                </div>
                <h1>Moe first podcast about fullstack development.</h1>
                <Button className='outline'>Listen now</Button>
            </div>
            <div className="hero-image">
                <img src="/undraw_developer_activity_bv83.svg" alt=""/>
            </div>
        </section>
    )
}

export default Hero