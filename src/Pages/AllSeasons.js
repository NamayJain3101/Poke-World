import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import { Link } from 'react-router-dom'
import SeasonsContainer from '../Components/SeasonsContainer'

const AllSeasons = () => {
    return (
        <>
            <Hero hero="seasonHero">
                <Banner title="All Seasons">
                    <Link to='/' className="btn-primary">
                        Back to home
                    </Link>
                </Banner>
            </Hero>
            <SeasonsContainer />
        </>
    )
}

export default AllSeasons
