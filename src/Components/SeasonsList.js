import React from 'react'
import Season from './Season'
import Title from './Title'

const SeasonsList = ({seasons}) => {
    if(seasons.length === 0) {
        return (
            <div className="empty-search">
                <h3>No season matched your search parameters !!!</h3>
            </div>
        )
    }
    return (
        <section className="seasonslist">
            <Title title="Seasons" />
            <div className="seasonslist-center">
                {
                    seasons.map(item => {
                        return <Season key={item.id} season={item} />
                    })
                }
            </div>
        </section>
    )
}

export default SeasonsList
