import React from 'react';
import Single from '../Single/Single';
import Styles from './Structure.module.css';
import Spinner from '../../Spinner/Spinner'
const structure = (props) => {
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

    } = props.data
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
        function truncateString(str, num=105) {
            if (str.length <= num) {
              return str
            }
            return str.slice(0, num) + '...'
          }
          let pop = null
          if(popularresults) {
              pop = popularresults.slice(0, 4).map(curr => <Single key={curr.id} title= {curr.title} details={curr.id} link={curr.poster_path} description={truncateString(curr.overview)} />)
          }
          let top
          if(topratedresults) {
              top = topratedresults.slice(0, 4).map(curr => <Single key={curr.id} title= {curr.title} details={curr.id} link={curr.poster_path} description={truncateString(curr.overview)} />)
          }
          let coming
          if(comingsoonresults) {
              coming = comingsoonresults.slice(0, 4).map(curr => <Single key={curr.id} title= {curr.title} details={curr.id} link={curr.poster_path} description={truncateString(curr.overview)} />)
          }
          let now
          if(nowplayingresults) {
              now = nowplayingresults.slice(0, 4).map(curr => <Single key={curr.id} title= {curr.title} details={curr.id} link={curr.poster_path} description={truncateString(curr.overview)} />)
          }
        return(
    
            <>
            <div className={Styles.card}>
            <div className={Styles.section}>{props.popsec}</div>
               <i className={`${Styles.right} ${Styles.arrow}`}></i>
               <i className={`${Styles.left} ${Styles.arrow}`}></i>
                <div className={Styles.grid}>
                {pop}
            </div>
            </div>
            <div className={Styles.card}>
            <div className={Styles.section}>{props.nowsec}</div>
               <i className={`${Styles.right} ${Styles.arrow}`}></i>
               <i className={`${Styles.left} ${Styles.arrow}`}></i>
                <div className={Styles.grid}>
                {now}
            </div>
            </div>
            <div className={Styles.card}>
            <div className={Styles.section}>{props.comingsec}</div>
               <i className={`${Styles.right} ${Styles.arrow}`}></i>
               <i className={`${Styles.left} ${Styles.arrow}`}></i>
                <div className={Styles.grid}>
                {coming}
            </div>
            </div>
            <div className={Styles.card}>
            <div className={Styles.section}>{props.topsec}</div>
               <i className={`${Styles.right} ${Styles.arrow}`}></i>
               <i className={`${Styles.left} ${Styles.arrow}`}></i>
                <div className={Styles.grid}>
                {top}
            </div>
            </div>
            </>
        )
    }


export default structure;