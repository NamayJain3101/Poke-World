import React from 'react'
import SeasonsFilter from './SeasonsFilter'
import SeasonsList from './SeasonsList'
import Loading from './Loading'
import { SeasonConsumer } from '../Context'

const SeasonsContainer = () => {
    return (

        <SeasonConsumer>
            {
                (value) => {
                    const {loading, sortedSeasons, seasons} = value;
                    if(loading) {
                        return <Loading title="Seasons" />
                    }
                    return (
                        <>
                            <SeasonsFilter seasons={seasons} />
                            <SeasonsList seasons={sortedSeasons} />
                        </>
                    );
                }
            }
        </SeasonConsumer>
    )
}

export default SeasonsContainer
