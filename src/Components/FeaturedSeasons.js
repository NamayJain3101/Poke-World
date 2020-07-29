import React, { Component } from 'react';
import { SeasonContext } from '../Context';
import Loading from './Loading';
import Season from './Season';
import Title from './Title';

export default class FeaturedSeasons extends Component {

    static contextType = SeasonContext;

    render() {

        let {loading, featuredSeasons: seasons} = this.context;
        seasons = seasons.map(season => {
            return (
                <Season key={season.id} season={season} />
            )
        })

        return (
            <section className="featured-seasons">
                <Title title="featured seasons" />
                <div className="featured-seasons-center">
                    { loading ? <Loading /> : seasons }
                </div>
            </section>
        )
    }
}
