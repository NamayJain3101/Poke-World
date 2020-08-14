import React, { Component } from 'react';
import defaultImg from '../images/default.jpg';
import { SeasonContext, SeasonConsumer } from '../Context';
import { Link } from 'react-router-dom';
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
                <Link to='/seasons' className="btn-secondary">Back to Seasons</Link>
            </div>
        }

        const {seasonNo, description, images, episodes} = season;

        return (
                <SeasonConsumer>
                    {
                        (value) => {
                            const {loading} = value;
                            if(loading) {
                                return <Loading title={"Season " + seasonNo} />
                            }
                            return (
                                <>
                                    <StyledHero img={images[0]}></StyledHero>
                                    <Title title="description" />
                                    <section className="desc">
                                        <p>{description}</p>
                                    </section>
                                    <br/>
                                    <Title title="Episodes" />
                                    <>
                                        { episodes ? episodes.map((item, index) => 
                                            {
                                                return (
                                                    <div className="episode-container" key={index} >
                                                        <Link to={'/seasons/' + seasonNo + "/" + item.episodeNo} className="episode-link">
                                                            <span className="Eno">
                                                                {item.episodeNo}
                                                            </span>&nbsp;&nbsp;
                                                            <span className="Ename">
                                                                {item.episodeName}
                                                            </span>
                                                        </Link>
                                                    </div>
                                                )
                                            }) : (
                                                <div className="error">
                                                    <h3>No Episodes Found</h3>
                                                </div>
                                            )
                                        }
                                    </>
                                    <div className="btn-center">
                                        <Link to='/seasons' className="btn-secondary">Back to Seasons</Link>
                                    </div>
                                </>
                            );
                        }
                    }
                </SeasonConsumer>
        )
    }
}
