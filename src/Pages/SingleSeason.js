import React, { Component } from 'react';
import defaultImg from '../images/default.jpg';
import { SeasonContext } from '../Context';
import { Link } from 'react-router-dom';
import Banner from '../Components/Banner';
import StyledHero from '../Components/StyledHero';
import Title from '../Components/Title';


export default class SingleSeason extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            seasonNo: this.props.match.params.seasonNo,
            defaultImg
        }
    }

    static contextType = SeasonContext;

    render() {

        const { getSeason } = this.context;
        const season = getSeason(this.state.seasonNo);
        console.log(season);
        if(!season) {
            return <div className="error">
                <h3>No Season Found</h3>
                <Link to='/seasons' className="btn-primary">Back to Seasons</Link>
            </div>
        }

        const {seasonName, seasonNo, description, images, totalEpisodes} = season;

        return (
            <>
                <StyledHero img={images[0]}>
                    {/* <Banner title={"Season" + seasonNo + ': ' + seasonName} subtitle={"No of episodes: " + totalEpisodes} > */}
                        {/* <Link to='/seasons' className="btn-primary">
                            Back to seasons
                        </Link> */}
                    {/* </Banner> */}
                </StyledHero>
                <section className="desc">
                    <h3>Description</h3>
                    <p>{description}</p>
                </section>
                <br/><br/>
                <Title title="Episodes" />
                {/* {episodes.map((item, index) => {
                    return (
                    <Link key={index} to={'/seasons/' + seasonNo + "/" + item.episodeNo}>
                        {item.episodeNo + ". " + item.episodeName}
                    </Link>
                    )
                })} */}
            </>
        )
    }
}
