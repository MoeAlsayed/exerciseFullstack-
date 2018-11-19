import React from 'react';
import './index.scss'
import { Facebook } from './facebook'
import { SoundCloud } from './soundcloud'
import { Twitter } from './twitter'
import { YouTube } from './youtube'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a className="facebook" href="/"><Facebook /></a></li>
                    <li><a className="youTube" href="/"><YouTube /></a></li>
                    <li><a className="twitter" href="/"><Twitter /></a></li>
                    <li><a className="soundCloud" href="/"><SoundCloud /></a></li>
                </ul>
            </nav>
            <span>App loads 2018</span>
        </header>
    )
}

export default Header