import React, { Component } from 'react';
import Type from './Type/Type';
import Structure from './Structure/Structure'
import Styles from './Movies.module.css'
import axios from 'axios'
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
        return(
            <> 
            <Type>Movies</Type>
           
                <div className={Styles.card}>
                    <Structure 
                        popsec="popular"
                        topsec="toprated"
                        nowsec="nowplaying"
                        comingsec="upcoming"
                        data= {this.state}
                    />  
                 </div> 
          
            </>
        )
    }
};

export default Movie;
