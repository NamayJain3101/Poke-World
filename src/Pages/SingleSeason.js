import React, { Component } from 'react';
import defaultImg from '../images/default.jpg';
import { SeasonContext, SeasonConsumer } from '../Context';
import { Link } from 'react-router-dom';
// import Banner from '../Components/Banner';
import StyledHero from '../Components/StyledHero';
import Title from '../Components/Title';
import Loading from '../Components/Loading';

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
        if(!season) {
            return <div className="error">
                <h3>No Season Found</h3>
                <Link to='/seasons' className="btn-primary">Back to Seasons</Link>
            </div>
        }

        const {seasonNo, description, images, episodes} = season;

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
                    <Title title="description" />
                    <p>{description}</p>
                </section>
                <br/><br/>
                <Title title="Episodes" />
                <SeasonConsumer>
                    {
                        (value) => {
                            const {loading} = value;
                            if(loading) {
                                return <Loading />
                            }
                            return (
                                <>
                                    {episodes.map((item, index) => {
                                        return (
                                            <div className="episode-container" key={index} >
                                                <Link to={'/seasons/' + seasonNo + "/" + item.episodeNo} className="episode-link">
                                                    <span className="Eno">
                                                        {item.episodeNo}.&nbsp;
                                                    </span>
                                                    <span className="Ename">
                                                        {item.episodeName}
                                                    </span>
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </>
                            );
                        }
                    }
                </SeasonConsumer>
            </>
        )
    }
}
