import React, { useEffect, useState } from 'react';
import Show from '../Show/Show';
import Wacthlist from '../Watchlist/Wacthlist';
import './TvShow.css';

const TvShow = () => {
    const [tvShows, setTvShow] = useState([]);

    const [watched, setWatched] = useState([]);

    useEffect(() => {
        fetch('./TvShows.json')
            .then(res => res.json())
            .then(data => setTvShow(data));
    }, [])

    const handleWatchedShow = (tvShow) => {
        const newWatched = [...watched, tvShow];
        setWatched(newWatched);
    }

    return (
        <div className="shows-container">

            <div className="tvShow-Container">

                {
                    tvShows.map(tvShow => <Show
                        key={tvShow.id}
                        tvShow={tvShow}
                        handleWatchedShow={handleWatchedShow}>
                    </Show>)
                }
            </div>

            <div className="watchedShow-container">
                <Wacthlist watched={watched}></Wacthlist>
                <button className="watchNow-btn">Watch Now</button>
            </div>

        </div>
    );
};

export default TvShow;