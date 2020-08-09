import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { SeasonContext } from '../Context';
import Title from '../Components/Title';
import ReactPlayer from 'react-player';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa'
export default class Episode extends Component {

    constructor(props){
        super(props);
        this.state = {
            seasonNo: this.props.match.params.seasonNo,
            episodeNo: this.props.match.params.episode
        }
    }

    static contextType = SeasonContext;

    reload = (episodeNo) => {
        this.setState({
            episodeNo
        })
    }

    componentDidMount () {
        window.onpopstate = () => {
            this.setState({
                episodeNo: this.props.match.params.episode
            });
        }
    }

    render() {

        const { getEpisode } = this.context;
        const episode = getEpisode(this.state.seasonNo, this.state.episodeNo);
        if(!episode) {
            return <div className="error">
                <h3>No Episode Found</h3>
                <Link to='/seasons' className="btn-secondary">Back to Seasons</Link>
            </div>
        }

        const {seasonNo, episodes, totalEpisodes } = episode;
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
                <div className="episode-change">
                    <Link 
                        to={'/seasons/' + seasonNo + "/" + (parseInt(episodeNo) - 1)} 
                        className={parseInt(episodeNo) === 1 ? "episode-link disabled" : "episode-link"} 
                        onClick={() => this.reload(parseInt(episodeNo) - 1)}
                        title="Previous episode"
                    >
                        <FaAngleDoubleLeft />
                    </Link>
                    <Link 
                        to={'/seasons/' + seasonNo + "/" + (parseInt(episodeNo) + 1)} 
                        className={parseInt(episodeNo) === totalEpisodes ? "episode-link disabled" : "episode-link"} 
                        onClick={() => this.reload(parseInt(episodeNo) + 1)}
                        title="Next episode"
                    >
                        <FaAngleDoubleRight /> 
                    </Link>
                </div>
                <div className="btn-center">
                    <Link to={'/seasons/' + seasonNo} className="btn-secondary">to Season {seasonNo}</Link>
                </div>
            </div>
        )
    }
}
