import React from 'react';
import Styles from './Single.module.css';
import { Link } from 'react-router-dom'
const single = props => {
    function truncateTitle(str, num=30) {
        if (str.length <= num) {
          return str
        }
        return str.slice(0, num) + '...'
      }
    return(
        <>
        <div className={Styles.card}>
            <img className={Styles.img} alt={props.title} src={`https://image.tmdb.org/t/p/w500${props.link}`}/>
            <div className={Styles.modal}>
                <div className={Styles.title}>{props.title}</div> 
                <div className={Styles.description}>{props.description}</div>
                <div className={Styles.button}>
                <Link to={{pathname: '/' + props.details}}><button className={Styles.link} >read more &#8608;</button></Link>
                </div>
            </div>
            <div className={Styles.btitle}>{truncateTitle(props.title)}</div>
        
        </div>
        </>
    )
};

export default single;