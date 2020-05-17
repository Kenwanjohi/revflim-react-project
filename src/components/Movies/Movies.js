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
                let result = await axios.get(`https://cors-anywhere.herokuapp.com/${BASE_URL}${endPoint}?api_key=${apikey}&language=en-US`)
                const results = await result.data.results
                this.setState({
                    [`${key}isLoading`]: false,
                    [`${key}results`] : results,
                    [`${key}error`] : false})

            } catch(error) {
                this.setState({
                    [`${key}isLoading`]: false,
                    [`${key}error`] : true,
                    [`${key}errorstring`]: error.message
                })
            }

        }
        )
    }
    render() {
        console.log(this.state)
        const {
            comingsoonresults,
            comingsoonisLoading,
            comingsoonerror,
            comingsoonerrorstring,
            nowplayingresults,
            nowplayingisLoading,
            nowplayingerror,
            nowplayingerrorstring,
            popularresults,
            popularisLoading,
            popularerror,
            popularerrorstring,
            topratedresults,
            topratedisLoading,
            topratederror,
            topratederrorstring

        } = this.state
       //popular section
       if(popularerror) {
           return <div>{popularerrorstring}</div>
        } 
        if(popularisLoading) {
            return <Spinner>loading...</Spinner>
        }

        //toprated section
        if(topratederror) {
           return <div>{topratederrorstring}</div>
        }
        if(topratedisLoading) {
            return <Spinner>loading...</Spinner>
        }
        //comingsoon section
        if(comingsoonerror) {
           return <div>{comingsoonerrorstring}</div>
        }
        if(comingsoonisLoading) {
            return <Spinner>loading...</Spinner>
        }
        //nowplaying section
        if(nowplayingerror) {
           return <div>{nowplayingerrorstring}</div>
        }
        if(nowplayingisLoading) {
            return <Spinner>loading...</Spinner>
        }
        return(
            <> 
            <Type>Movies</Type>
           
                <div className={Styles.card}>
                    <Structure 
                        popsec="popular"
                        topsec="toprated"
                        nowsec="nowplaying"
                        comingsec="upcoming"
                        toprated={topratedresults}
                        comingsoon={comingsoonresults}
                        popular={popularresults}
                        nowplaying={nowplayingresults}
                    />  
                 </div> 
          
            </>
        )
    }
};

export default Movie;
