import React, { Component } from 'react'
import Client from './Contentful'

const SeasonContext = React.createContext();

class SeasonProvider extends Component {

    state = {
        seasons: [],
        sortedSeasons: [],
        featuredSeasons: [],
        loading: true,

        gen: 'all'
    }

    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "pokeWorld",
                order: 'fields.seasonNo'
            });
            let seasons = this.formatData(response.items);
            let featuredSeasons = seasons.filter(season => season.featured === true)
            this.setState({ 
                seasons, 
                featuredSeasons, 
                sortedSeasons: seasons,
                loading: false 
            })
        }
        catch (error) {
            console.log(error);
        }
    }

    componentDidMount () {
        this.getData();
    }

    formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.seasonImages.map(image => image.fields.file.url);
            let episodes;
            if(item.fields.episodes){
                episodes = item.fields.episodes.map(video => {
                    return ({
                        episodeNo: video.fields.title.slice(-1),
                        episodeName: video.fields.description,
                        episode: video.fields.file.url
                    })
                })
            }
            let season = {...item.fields, images, id, episodes, loading: this.state.loading};
            return season;
        })
        return tempItems;
    }

    getSeason = (seasonNo) => {
        let tempSeasons = [...this.state.seasons];
        const season = tempSeasons.find((season) => {
            return season.seasonNo === parseInt(seasonNo);
        });
        return season;
    }

    getEpisode = (seasonNo, episodeNo) => {
        let tempSeasons = [...this.state.seasons];
        let tempNo = 0;
        const episode = tempSeasons.find((episode) => {
            if(episode.seasonNo === parseInt(seasonNo)){
                for(let i=0; i<episode.episodes.length; i++){
                    console.log(episode.episodes[i])
                    if(parseInt(episode.episodes[i].episodeNo) === parseInt(episodeNo)){
                        tempNo = parseInt(episode.episodes[i].episodeNo);
                        break;
                    }
                }
            }
            return (episode.seasonNo === parseInt(seasonNo) && tempNo);
        });
        return episode;
    }

    handleChange = event => {
        const target = event.target;
        const name = event.target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        }, this.filterSeasons);
    }

    filterSeasons = () => {
        let {
            seasons, gen
        } = this.state;
        let tempSeasons = [...seasons];

        if(gen !== 'all'){
            tempSeasons = tempSeasons.filter(season => season.gen === parseInt(gen))
        }
        this.setState({
            sortedSeasons: tempSeasons
        })
    }

    render() {
        return (
            <SeasonContext.Provider value={{...this.state, getSeason: this.getSeason, getEpisode: this.getEpisode, handleChange: this.handleChange}}>
                {this.props.children}
            </SeasonContext.Provider>
        )
    }
}

const SeasonConsumer = SeasonContext.Consumer;

export { SeasonProvider, SeasonConsumer, SeasonContext };


