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

    } = props.data
    let pop = null
           //popular section
        if(popularerror) {
            pop = <div>{popularerrorstring}</div>
         } 
         if(popularisLoading) {
             pop = <Spinner>loading...</Spinner>
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
          
          if(popularresults) {
              pop = popularresults.slice((popularcurrentpage * popularperpage) - popularperpage, popularperpage * popularcurrentpage).map(curr => <Single key={curr.id} title= {curr.title} details={curr.id} link={curr.poster_path} description={truncateString(curr.overview)} />)
          }
          let top
          if(topratedresults) {
              top = topratedresults.slice((topratedcurrentpage * topratedperpage) - topratedperpage, topratedperpage * topratedcurrentpage).map(curr => <Single key={curr.id} title= {curr.title} details={curr.id} link={curr.poster_path} description={truncateString(curr.overview)} />)
          }
          let coming
          if(comingsoonresults) {
              coming = comingsoonresults.slice((comingsooncurrentpage * comingsoonperpage) - comingsoonperpage, comingsoonperpage * comingsooncurrentpage).map(curr => <Single key={curr.id} title= {curr.title} details={curr.id} link={curr.poster_path} description={truncateString(curr.overview)} />)
          }
          let now
          if(nowplayingresults) {
              now = nowplayingresults.slice((nowplayingcurrentpage * nowplayingperpage) - nowplayingperpage, nowplayingperpage * nowplayingcurrentpage).map(curr => <Single key={curr.id} title= {curr.title} details={curr.id} link={curr.poster_path} description={truncateString(curr.overview)} />)
          }
        return(
    
            <>
            <div className={Styles.card}>
            <div className={Styles.section}>{props.popsec}</div>
               <i className={`${Styles.right} ${Styles.arrow}`}  onClick={ () => props.changepage('next', 'popular')}></i>
               <i className={`${Styles.left} ${Styles.arrow}`} onClick={ () => props.changepage('next', 'popular')}></i>
                <div className={Styles.grid}>
                {pop}
            </div>
            </div>
            <div className={Styles.card}>
            <div className={Styles.section}>{props.nowsec}</div>
               <i className={`${Styles.right} ${Styles.arrow}`}  onClick={ () => props.changepage('next', 'nowplaying')}></i>
               <i className={`${Styles.left} ${Styles.arrow}`}  onClick={ () => props.changepage('prev', 'nowplaying')}></i>
                <div className={Styles.grid}>
                {now}
            </div>
            </div>
            <div className={Styles.card}>
            <div className={Styles.section}>{props.comingsec}</div>
               <i className={`${Styles.right} ${Styles.arrow}`} onClick={ () => props.changepage('next', 'coming')} ></i>
               <i className={`${Styles.left} ${Styles.arrow}`} onClick={ () => props.changepage('prev', 'coming')}></i>
                <div className={Styles.grid}>
                {coming}
            </div>
            </div>
            <div className={Styles.card}>
            <div className={Styles.section}>{props.topsec}</div>
               <i className={`${Styles.right} ${Styles.arrow}`}  onClick={ () => props.changepage('next', 'toprated')}></i>
               <i className={`${Styles.left} ${Styles.arrow}`}  onClick={ () => props.changepage('next', 'toprated')}></i>
                <div className={Styles.grid}>
                {top}
            </div>
            </div>
            </>
        )
    }


export default structure;