import React from 'react';
import './index.scss'
import { Facebook } from '../Header/facebook';
import { YouTube } from '../Header/youtube';
import { SoundCloud } from '../Header/soundcloud';
import { Twitter } from '../Header/twitter';

const Footer = () => {
    return (
        <footer className='container'>
            <div class="social-media row footer-top">
                <div class="col-6 text-left">
                    <h5>AppLoads.pl</h5>
                </div>
                <div class="col-6 text-right">
                    <ul className='d-flex justify-content-end'>
                        <li class="social-link"><a href="https://www.facebook.com/apploads/"><Facebook /></a></li>
                        <li class="social-link"><a href="/"><YouTube /></a></li>
                        <li class="social-link"><a href="https://soundcloud.com/apploads"><SoundCloud /></a></li>
                        <li class="social-link"><a href="https://twitter.com/app_loads"><Twitter /></a></li>
                    </ul>
                </div>
            </div>

            <div class="row footer-main">
                <div class="col-6 medium-3 text-left">
                    <p>
                        <span> © Kopiowanie bez zgody właściciela zabronione.</span>
                    </p>
                </div>

                <div class="col-6 medium-3 medium-text-right text-right">
                    <p>
                        <span>Masz pytanie albo chcesz wziąć udział w nagraniu?</span>
                    </p>
                </div>
            </div>
            <div className="row footer-bottom">
                <div className="col-6 text-left">
                    <h5><span>
                        Powstałe w bólu i wielu frustracjach w 2018.
                    </span></h5>
                </div>
                <div className="col-6 text-right">
                    <h5><span>
                        Pisz śmiało na: <a href="mailto:hello@apploads.pl">hello@apploads.pl</a>
                    </span></h5>
                </div>
            </div>
        </footer>
    )
};
export default Footer
