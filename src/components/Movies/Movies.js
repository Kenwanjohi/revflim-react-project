import React, { Component } from 'react';
import Type from './Type/Type';
import Structure from './Structure/Structure'
import Styles from './Movies.module.css'
import Single from './Single/Single';
import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const apikey = `6d52450de693cb39e47fd26bd1c349da`;
const endPoints = {
    "popular" : "popular",
    "nowplaying": "now_playing",
    "comingsoon": "upcoming",
    "toprated": "top_rated"
}
class Movie extends Component {
    _isMounted = false
    state={
        popularresults: [],
        nowplayingresults: [],
        comingsoonresults: [],
        topratedresults: [],
        selectedmovieid: null
    }
componentDidMount() {
    this._isMounted = true;
    Object.keys(endPoints).forEach(key => {
        this.getMoviesData(endPoints[key], key)
    })
}

    getMoviesData = (endPoint, key) => {
        this.setState({
           [`${key}isLoading`]: true,
           [`${key}results`] : [],
           [`${key}error`] : null,
           [`${key}currentpage`]: 1,
           [`${key}perpage`]: 4
        }, async () => {
            try{
                let result = await axios.get(`https://cors-anywhere.herokuapp.com/${BASE_URL}${endPoint}?api_key=${apikey}&language=en-US`)
                const results = await result.data.results
                if(this._isMounted) {
                    this.setState({
                        [`${key}isLoading`]: false,
                        [`${key}results`] : results,
                        [`${key}error`] : false})
                }

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

   componentWillUnmount() {
       this._isMounted = false
   }
    setpageHandler = (direction, section) => {
        if (section === 'coming') {
            if(direction === 'next') {
                this.setState({
                    comingsooncurrentpage: this.state.comingsooncurrentpage + 1})
            }  else if (direction === 'prev') {
                this.setState({
                    comingsooncurrentpage: this.state.comingsooncurrentpage - 1});
            }
        }
        if (section === 'popular') {
            if(direction === 'next') {
                this.setState({
                    popularcurrentpage: this.state.popularcurrentpage + 1})
            }  else if (direction === 'prev') {
                this.setState({
                    popularcurrentpage: this.state.popularcurrentpage - 1});
            }
        }
        if (section === 'nowplaying') {
            if(direction === 'next') {
                this.setState({
                    nowplayingcurrentpage: this.state.nowplayingcurrentpage + 1})
            }  else if (direction === 'prev') {
                this.setState({
                    nowplayingcurrentpage: this.state.nowplayingcurrentpage - 1});
            }
        }
        if (section === 'toprated') {
            if(direction === 'next') {
                this.setState({
                    topratedcurrentpage: this.state.topratedcurrentpage + 1})
            }  else if (direction === 'prev') {
                this.setState({
                    topratedcurrentpage: this.state.topratedcurrentpage - 1});
            }
        }
    }
    render() {
        console.log(this.state)
        const {
            comingsoonresults,
            comingsoonisLoading,
            comingsoonerror,
            comingsoonerrorstring,
            comingsooncurrentpage,
            comingsoonperpage,
            nowplayingresults,
            nowplayingisLoading,
            nowplayingerror,
            nowplayingerrorstring,
            nowplayingcurrentpage,
            nowplayingperpage,
            popularresults,
            popularisLoading,
            popularerror,
            popularcurrentpage,
            popularperpage,
            popularerrorstring,
            topratedresults,
            topratedisLoading,
            topratederror,
            topratederrorstring,
            topratedcurrentpage,
            topratedperpage,
    
        } = this.state
        function truncateString(str, num=105) {
            if (str.length <= num) {
              return str
            }
            return str.slice(0, num) + '...'
          }
        let pop = null
        if(popularresults) {
            pop = popularresults.slice((popularcurrentpage * popularperpage) - popularperpage, popularperpage * popularcurrentpage).map(curr => <Single 
            key={curr.id}
            title= {curr.title} 
            details={curr.id} 
            link={curr.poster_path}
            description={truncateString(curr.overview)} />)
        }
        let top = null
        if(topratedresults) {
            top = topratedresults.slice((topratedcurrentpage * topratedperpage) - topratedperpage, topratedperpage * topratedcurrentpage).map(curr => <Single 
            key={curr.id}
            title= {curr.title} 
            details={curr.id} 
            link={curr.poster_path} 
            description={truncateString(curr.overview)} />)
        }
        let coming = null
        if(comingsoonresults) {
            coming = comingsoonresults.slice((comingsooncurrentpage * comingsoonperpage) - comingsoonperpage, comingsoonperpage * comingsooncurrentpage).map(curr => <Single 
            key={curr.id} 
            title= {curr.title}
            details={curr.id} 
            link={curr.poster_path}
            description={truncateString(curr.overview)} />)
        }
        let now = null
        if(nowplayingresults) {
            now = nowplayingresults.slice((nowplayingcurrentpage * nowplayingperpage) - nowplayingperpage, nowplayingperpage * nowplayingcurrentpage).map(curr => <Single 
                key={curr.id} 
                title= {curr.title} 
                details={curr.id} 
                link={curr.poster_path} 
                description={truncateString(curr.overview)} />)
        }
   
        return(
            <> 
            <Type>Movies</Type>
           
                <div className={Styles.card}>
                    <Structure 
                        section= "popular"
                        isloading= {popularisLoading}
                        isError = {popularerror}
                        errorString = {popularerrorstring}
                        currentPage = {popularcurrentpage}
                        results = {popularresults}
                        changePageHandler = {this.setpageHandler}
                        data = {pop}
                        sec = "popular"
                    />  
                    <Structure 
                        section= "nowplaying"
                        isloading= {nowplayingisLoading}
                        isError = {nowplayingerror}
                        errorString = {nowplayingerrorstring}
                        currentPage = {nowplayingcurrentpage}
                        results = {nowplayingresults}
                        changePageHandler = {this.setpageHandler}
                        data = {now}
                        sec = "nowplaying"
                    />  
                    <Structure 
                        section= "Upcoming"
                        isloading= {comingsoonisLoading}
                        isError = {comingsoonerror}
                        errorString = {comingsoonerrorstring}
                        currentPage = {comingsooncurrentpage}
                        results = {comingsoonresults}
                        changePageHandler = {this.setpageHandler}
                        data = {coming}
                        sec= "coming"
                    />  
                    <Structure 
                        section= "top rated"
                        isloading= {topratedisLoading}
                        isError = {topratederror}
                        errorString = {topratederrorstring}
                        currentPage = {topratedcurrentpage}
                        results = {topratedresults}
                        changePageHandler = {this.setpageHandler}
                        data = {top}
                        sec = "toprated"
                    />  
                 </div> 
            </>
        )
    }
};

export default Movie;
