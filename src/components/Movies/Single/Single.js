import React from 'react';
import Styles from './Single.module.css';
const single = props => {
    return(
        <>
        <div className={Styles.card}>
            <a href={`/${props.details}`}><img className={Styles.img} alt={props.title} src={`https://image.tmdb.org/t/p/w500${props.link}`}/></a> 
            <div className={Styles.modal}>
                <div className={Styles.title}>{props.title}</div> 
                <div className={Styles.description}>{props.description}</div>
                <div className={Styles.button}>
                    <a className={Styles.link} href={`/${props.details}`}>read more &#8608;</a>
                </div>
            </div>
        <div className={Styles.btitle}>{props.title}</div>
        
        </div>
        </>
    )
};

export default single;