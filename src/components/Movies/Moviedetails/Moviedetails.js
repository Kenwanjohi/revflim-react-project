import React, { useState, useEffect } from 'react'
import Toolbar from '../../Navigation/Toolbar/Toolbar'
import  Styles  from './Moviedetails.module.css'
import axios from 'axios'
import Spinner from '../../Spinner/Spinner'
const MovieDetails = (props) => {
    const [data, setData] = useState([])
    const [isloading, setloading] = useState(false)
    const [error, seterror] = useState(false)
    const [errormessage, seterrormessage] = useState(null)
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
    }, [props.match.params.id])
    let details = null;
    const{title, overview, poster_path, release_date, runtime, tagline, vote_average, id, genres} = data;
    console.log(id)
    if(data) {
        console.log(data)
       details =  <div className={Styles.card} key ={id}>
        <div className={Styles.container}>
            <div className={Styles.flex}>
                <div className={Styles.imgcard}>
                <div className={Styles.imgcontainer}>
                    <img className={Styles.image} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
                </div>
                </div>
                <div className={Styles.text}>
                    <div>{tagline}</div>
                    <div>{title}</div>
                    {/* <div>`${genres}, ${release_date}`</div> */}
                    <div>{runtime}</div>
                    <div>{overview}</div>
                    <div>{vote_average}</div>
                </div>
            </div>
        </div>
    </div>
    }
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
