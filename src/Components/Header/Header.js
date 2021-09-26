import React from 'react';
import tvshow from '../../images/tvshow.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>What is your favourite TV show??</h2>
            <img className="tv-img" src={tvshow} alt="tv img" />
            <h2>Watch Tv Shows</h2>
            <p>TV can provide a cheap escape instead of travelling. Exposing yourself to the cultures of the world can be easily done from behind a TV screen. Turn on your netflix pick a season of a tv series and unwind to the beautiful images on the screen.</p>
            <h1>Total Budget - 1.5B</h1>
        </div>
    );
};

export default Header;