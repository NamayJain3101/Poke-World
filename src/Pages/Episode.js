import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { SeasonContext } from '../Context';
import Title from '../Components/Title';
import ReactPlayer from 'react-player';

export default class Episode extends Component {

    constructor(props){
        super(props);
        this.state = {
            seasonNo: this.props.match.params.seasonNo,
            episodeNo: this.props.match.params.episode
        }
    }

    static contextType = SeasonContext;

    render() {

        const { getEpisode } = this.context;
        const episode = getEpisode(this.state.seasonNo, this.state.episodeNo);
        console.log(episode)
        if(!episode) {
            return <div className="error">
                <h3>No Episode Found</h3>
                <Link to='/seasons' className="btn-primary">Back to Seasons</Link>
            </div>
        }

        const {seasonNo, episodes } = episode;
        const episodeNo = this.state.episodeNo;
        let tempEpisode = null;

        for(let i=0; i<episodes.length; i++) {
            if(parseInt(episodeNo) === parseInt(episodes[i].episodeNo)){
                tempEpisode = {...episodes[i]};
                break;
            }
        }

        return (
            <div className="single-episode">
                <Title title={"Season " + seasonNo + " Episode " + tempEpisode.episodeNo} />
                <div className="video-container">
                    <ReactPlayer 
                        className="video-player"
                        url={tempEpisode.episode} 
                        controls 
                        pip 
                        playing
                        width={ window.screen.width < 800 ? "80%" : "50%" }
                        height="auto"
                    />
                </div>
                <div className="btn-center">
                    <Link to={'/seasons/' + seasonNo} className="btn-secondary">Back to Season {seasonNo}</Link>
                </div>
            </div>
        )
    }
}
