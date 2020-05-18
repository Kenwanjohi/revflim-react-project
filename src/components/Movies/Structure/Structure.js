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
        function truncateString(str, num=105) {
            if (str.length <= num) {
              return str
            }
            return str.slice(0, num) + '...'
          }
          let pop = null
          if(popularresults) {
              pop = popularresults.slice((popularcurrentpage * popularperpage) - popularperpage, popularperpage * popularcurrentpage).map(curr => <Single key={curr.id} title= {curr.title} details={curr.id} link={curr.poster_path} description={truncateString(curr.overview)} />)
          }
          let top = null
          if(topratedresults) {
              top = topratedresults.slice((topratedcurrentpage * topratedperpage) - topratedperpage, topratedperpage * topratedcurrentpage).map(curr => <Single key={curr.id} title= {curr.title} details={curr.id} link={curr.poster_path} description={truncateString(curr.overview)} />)
          }
          let coming = null
          if(comingsoonresults) {
              coming = comingsoonresults.slice((comingsooncurrentpage * comingsoonperpage) - comingsoonperpage, comingsoonperpage * comingsooncurrentpage).map(curr => <Single key={curr.id} title= {curr.title} details={curr.id} link={curr.poster_path} description={truncateString(curr.overview)} />)
          }
          let now = null
          if(nowplayingresults) {
              now = nowplayingresults.slice((nowplayingcurrentpage * nowplayingperpage) - nowplayingperpage, nowplayingperpage * nowplayingcurrentpage).map(curr => <Single key={curr.id} title= {curr.title} details={curr.id} link={curr.poster_path} description={truncateString(curr.overview)} />)
          }
     
          
        return(
    
            <>
            <div className={Styles.card}>
            <div className={Styles.section}>{props.popsec}</div>
               {popularisLoading ? 
                    <Spinner>loading...</Spinner>:
                    (
                        (popularerror) ? 
                        <div>{popularerrorstring}</div> :
                        <>
                         <i className={[Styles.left, Styles.arrow, popularcurrentpage === 1? Styles.display : null].join(' ')} onClick={ () => props.changepage('prev', 'popular')}></i>
                        <i className={[Styles.right, Styles.arrow, popularcurrentpage === (popularresults.length / 4)? Styles.display : null].join(' ')}  onClick={ () => props.changepage('next', 'popular')}></i>
                        {/* {renderButtons()} */}
                        <div className={Styles.grid}>
                         {pop}
                         </div>
                         </>
                    )

                }
                </div>
             
            
            
            <div className={Styles.card}>
            <div className={Styles.section}>{props.nowsec}</div>
              
                {nowplayingisLoading ? 
                    <Spinner>loading...</Spinner>:
                    (
                        (nowplayingerror) ? 
                        <div>{nowplayingerrorstring}</div>:
                        <>
                         <i className={[Styles.left, Styles.arrow, nowplayingcurrentpage === 1? Styles.display : null].join(' ')}  onClick={ () => props.changepage('prev', 'nowplaying')}></i>
                        <i className={[Styles.right, Styles.arrow, nowplayingcurrentpage === (nowplayingresults.length / 4)? Styles.display : null].join(' ')}  onClick={ () => props.changepage('next', 'nowplaying')}></i>
                        <div className={Styles.grid}>
                        {now}
                        </div>
                        </>
                    )

                }
                
            </div>

            <div className={Styles.card}>
            <div className={Styles.section}>{props.comingsec}</div>
              
               {comingsoonisLoading ? 
                    <Spinner>loading...</Spinner>:
                    (
                        (comingsoonerror) ? 
                        <div>{comingsoonerrorstring}</div>:  
                        <>
                         <i className={[Styles.left, Styles.arrow, comingsooncurrentpage === 1? Styles.display : null].join(' ')} onClick={ () => props.changepage('prev', 'coming')} ></i>
                        <i className={[Styles.right, Styles.arrow, comingsooncurrentpage === (comingsoonresults.length / 4)? Styles.display : null].join(' ')} onClick={ () => props.changepage('next', 'coming')}></i>
                         <div className={Styles.grid}>
                        {coming}
                        </div>
                        </>
                    )

                }
               
            </div>
            
            <div className={Styles.card}>
            <div className={Styles.section}>{props.topsec}</div>
              
                {topratedisLoading ? 
                    <Spinner>loading...</Spinner>:
                    (
                        (topratederror) ? 
                        <div>{topratederrorstring}</div>: 
                        <>
                         <i className={[Styles.left, Styles.arrow, topratedcurrentpage === 1? Styles.display : null].join(' ')}  onClick={ () => props.changepage('prev', 'toprated')}></i>
                        <i className={[Styles.right, Styles.arrow, topratedcurrentpage === (topratedresults.length / 4)? Styles.display : null].join(' ')}  onClick={ () => props.changepage('next', 'toprated')}></i>
                        <div className={Styles.grid}>
                        {top}
                        </div>
                        </>
                    )

                }
               
            </div>
            
            </>
        )
    }


export default structure;