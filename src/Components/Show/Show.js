import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import './Show.css'

const Show = (props) => {


    const { name, season, genre, img, budget, viewers } = props.tvShow;

    return (
        <div className="show-style">
            <h2>{name}</h2>
            <img className="show-img" src={img} alt="" />
            <h4>Seasons : {season}</h4>
            <h4>Genre : {genre}</h4>
            <h5>Views : {viewers}</h5>
            <h5>Budget: {budget} $</h5>
            <button
                onClick={() => props.handleWatchedShow(props.tvShow)}
                className="watched-btn">Add to watchlist <FontAwesomeIcon icon={faEye} /></button>
        </div>
    );
};

export default Show;