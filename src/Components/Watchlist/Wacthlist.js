import React from 'react';
import './Watchlist.css';

const Wacthlist = (props) => {
    const { watched } = props;
    let total = 0;
    for (const tvShow of watched) {
        total = total + tvShow.budget;
    }
    return (
        <div>

            <h3>Show Watched : {props.watched.length} </h3>
            <h5>Budget of Show : {total}$</h5>

        </div>
    );
};

export default Wacthlist;