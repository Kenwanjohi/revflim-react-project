import React, { useState, useEffect } from 'react'
import Toolbar from '../../Navigation/Toolbar/Toolbar'
import  Styles  from './Moviedetails.module.css'
import axios from 'axios'
import Spinner from '../../Spinner/Spinner'
import { ColorExtractor } from "react-color-extractor";
const MovieDetails = (props) => {
    const [data, setData] = useState([])
    const [isloading, setloading] = useState(false)
    const [error, seterror] = useState(false)
    const [errormessage, seterrormessage] = useState(null)
    const [color, setColor] = useState([]);
    useEffect( () => {
            setloading(true)
            async function getDetails() {
                try {
                    const key = `6d52450de693cb39e47fd26bd1c349da`;
                    const result = await axios(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${key}&language=en-US`);
                    const results = result.data;
                    setData(results)
                    setloading(false)
                } catch(error) {
                    setloading(false)
                    seterror(true)
                    seterrormessage(error.message)
                }
            }        
            getDetails()
    }, [props.match.params.id]);
    function formatDate(date) {
      return  date.split('-').filter(el => el.length >= 4)
    };
    function getColors (colors) {
        setColor(colors)
    }

function formatTime(num) {
  let time;
  if(num > 0 && num < 60) {
    time = `${num}mins`
  } else if (num === 60) {
    time = `${(60/60)} hr`
  }
  else if (num > 60) {
	let hour = Math.floor(num/60)
  let min = Math.round((num/60 - hour) * 60)
    time = `${hour}hrs ${min}mins`
  }
else {
	return null
}
return time
}


    let details = null;
    const{title, overview, poster_path, release_date, runtime, tagline, vote_average, id, genres} = data;
    if(color) {
    if(data) {
        console.log(data)
       details =  <div className={Styles.card} style={{backgroundImage: `linear-gradient(to right, ${color[0]}, 50%, transparent)`}} key ={id}>
        <div className={Styles.container}>
            <div className={Styles.flex}>
                <div className={Styles.imgcard}>
                <div className={Styles.imgcontainer}>
                <ColorExtractor getColors={getColors}>
                    <img className={Styles.image} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
                </ColorExtractor>
                </div>
                </div>
                <div className={Styles.text}>
                    <div className={Styles.tagline}>{tagline}</div>
                    <div className={Styles.title}>{title}</div>
                    <div className={Styles.datum}>{genres && `${genres.map(el => el.name).join(`${String.fromCharCode(0x2022)}`)}${String.fromCharCode(0x2022)}${formatDate(release_date)}`}</div>
                    <div className={Styles.runtime}>{formatTime(runtime)}</div>
                    <div className={Styles.description}>{overview}</div>
                    <div>{vote_average}</div>
                </div>
            </div>
        </div>
    </div>
    }}
    return(
        <>
        <Toolbar/>
        {isloading ? <Spinner>loading...</Spinner>:

        (error? <div>{errormessage}</div> :
        [details])}
        </>    
        )
    }

export default MovieDetails;
