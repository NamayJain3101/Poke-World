import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <Hero hero="errorHero">
                <Banner title="Error 404" subtitle="page not found">
                    <Link to='/'>
                        <button className="btn-primary">Back to home</button>
                    </Link>
                </Banner>
            </Hero>
        </>
    )
}

export default Error
