import React from 'react'
import Title from './Title'
import {useContext} from 'react'
import { SeasonContext } from '../Context'

const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}

const SeasonsFilter = ({seasons}) => {
    const context = useContext(SeasonContext);
    const {
        handleChange
    } = context;

    let types = getUnique(seasons, 'gen');
    types = ['all', ...types];
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="Search Seasons" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="gen">Gen</label>
                    <select name="gen" id="gen" className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
            </form>
        </section>
    )
}

export default SeasonsFilter
