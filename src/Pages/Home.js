import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import { Link } from 'react-router-dom'
import FeaturedSeasons from '../Components/FeaturedSeasons'

const Home = () => {
    return (
        <>
            <Hero>
                <Banner title="Want to watch Pokemon" subtitle="Watch all seasons right here">
                    <Link to='/seasons'>
                        <button className="btn-primary">
                            All Seasons
                        </button>
                    </Link>
                </Banner>
            </Hero>
            <FeaturedSeasons />
        </>
    )
}

export default Home
