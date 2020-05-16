import React, { Component } from 'react';
import Type from './Type/Type';
import Structure from './Structure/Structure'
import Styles from './Movies.module.css'
import axios from 'axios'
import Spinner from '../Spinner/Spinner'
const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const apikey = `6d52450de693cb39e47fd26bd1c349da`;
const endPoints = {
    "popular" : "popular",
    "nowplaying": "now_playing",
    "comingsoon": "upcoming",
    "toprated": "top_rated"
}
class Movie extends Component {

    state={
        popularresults: [],
        nowplayingresults: [],
        comingsoonresults: [],
        topratedresults: []
    }
componentDidMount() {
    Object.keys(endPoints).forEach(key => {
        this.getMoviesData(endPoints[key], key)
    })
}

    getMoviesData = (endPoint, key) => {
        this.setState({
           [`${key}isLoading`]: true,
           [`${key}results`] : [],
           [`${key}error`] : null
        }, async () => {
            try{
                let result = await axios.get(`${BASE_URL}${endPoint}?api_key=${apikey}&language=en-US`)
                const results = await result.data.results
                this.setState({
                    [`${key}isLoading`]: false,
                    [`${key}results`] : results,
                    [`${key}error`] : null})

            } catch(error) {
                this.setState({
                    [`${key}isLoading`]: false,
                    [`${key}error`] : null,
                    [`${key}errorstring`]: error.message
                })
            }

        }
        )
    }
    render() {
        console.log(this.state)
        const {
            // comingsoonresults,
            // // comingsoonisLoading,
            // comingsoonerror,
            // comingsoonerrorstring,
            // nowplayingresults,
            // // nowplayingisLoading,
            // nowplayingerror,
            // nowplayingerrorstring,
            popularresults,
            // popularisLoading,
            popularerror,
            popularerrorstring,
            topratedresults,
            // topratedisLoading,
            topratederror,
            topratederrorstring

        } = this.state
        
        // let popular = popularerror ?   <div>{popularerrorstring}</div> : <Spinner>loading...</Spinner>
        // if(popularresults) {
        //     popular = <Structure 
        //     name="popular"
        //     popular={popularresults}
        //      />
        // }
        let toprated = topratederror ?   <div>{topratederrorstring}</div> : <Spinner>loading...</Spinner>
        if(topratedresults) {
            toprated = <Structure 
            name="toprated"
            toprated={topratedresults}
             />
        }
        // let comingsoon = comingsoonerror ?   <div>{comingsoonerrorstring}</div> : <Spinner>loading...</Spinner>
        // if(comingsoonresults) {
        //     comingsoon = <Structure 
        //     name="comingsoon"
        //     comingsoon={comingsoonresults}
        //      />
        // }
        // let nowplaying = nowplayingerror ?   <div>{nowplayingerrorstring}</div> : <Spinner>loading...</Spinner>
        // if(nowplayingresults) {
        //     nowplaying = <Structure 
        //     name="nowplaying"
        //     nowplaying={nowplayingresults}
        //      />
        // }
        return(
            <> 
            <Type>Movies</Type>
           
                <div className={Styles.card}>
                {/* {popular} */}
                {/* {comingsoon}
                {nowplaying} */}
                {toprated}
                 </div> 
          
            </>
        )
    }
};

export default Movie;
