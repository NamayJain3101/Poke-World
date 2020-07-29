import React from 'react';
import loadingGif from '../images/loading.gif'

const Loading = () => {
    return (
        <div className="loading">
            <h4>Loading Seasons...</h4>
            <img src={loadingGif} alt="Loading" />
        </div>
    )
}

export default Loading
