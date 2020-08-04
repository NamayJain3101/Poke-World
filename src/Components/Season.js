import React from 'react';
import defaultImg from '../images/default.jpg'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Season = ({season}) => {

    const {seasonNo, images} = season;

    return (
        <article className="season">
            <div className="img-container">
                <img src={images[0] || defaultImg} alt={"season" + seasonNo} />
                <div className="sno-top">
                    <h6>Season {seasonNo}</h6>
                </div>
                <Link to={'/seasons/' + seasonNo} className="btn-secondary season-link">
                    Episodes
                </Link>
            </div>
        </article>
    )
}

Season.propTypes = {
    season: PropTypes.shape({
        seasonName: PropTypes.string.isRequired,
        seasonNo: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired
    })
}

export default Season
