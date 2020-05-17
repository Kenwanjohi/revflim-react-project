import React from 'react';
import Single from '../Single/Single';
import Styles from './Structure.module.css';
const structure = (props) => {
        function truncateString(str, num=105) {
            if (str.length <= num) {
              return str
            }
            return str.slice(0, num) + '...'
          }
          // eslint-disable-next-line
          const { popular, toprated, comingsoon, nowplaying } = props
          let pop = null
          if(popular) {
              pop = popular.slice(0, 4).map(curr => <Single key={curr.id} title={curr.title} details={curr.id} link={curr.poster_path} description={truncateString(curr.overview)} />)
          }
          let top
          if(toprated) {
              top = toprated.slice(0, 4).map(curr => <Single key={curr.id} title={curr.title} details={curr.id} link={curr.poster_path} description={truncateString(curr.overview)} />)
          }
          let coming
          if(comingsoon) {
              coming = comingsoon.slice(0, 4).map(curr => <Single key={curr.id} title={curr.title} details={curr.id} link={curr.poster_path} description={truncateString(curr.overview)} />)
          }
          let now
          if(nowplaying) {
              now = nowplaying.slice(0, 4).map(curr => <Single key={curr.id} title={curr.title} details={curr.id} link={curr.poster_path} description={truncateString(curr.overview)} />)
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