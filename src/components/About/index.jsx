import React from 'react';
import './index.scss';

const Presnter = () => {
    return (
        <section className='container'>
            <div className="about-wrapper">
                <div className="about-section">
                    <p>
                        <span className="overline">Who am I ?</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sapiente animi corrupti atque alias est doloribus, earum consequatur numquam quasi harum, a voluptatibus quidem tempora natus: <a href="/">Dribble</a>, <a href="/">Linkedin</a>, <a href="/">Medium </a> and <a href="/">About.me</a>
                    </p>
                </div>
                <img src="../frame_anim.svg" alt="" />
            </div>
        </section>
    )
}

export default Presnter