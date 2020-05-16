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
        const toprated = props.toprated.slice(0, 4).map(curr => {
            return(
                <Single
                key={curr.id}
                title={curr.title}
                details={curr.id}
                link={curr.poster_path}
                description={truncateString(curr.overview)}
                />
            )
        })
        const pop = props.popular.slice(0, 4).map(curr => {
            return(
                <Single
                key={curr.id}
                title={curr.title}
                details={curr.id}
                link={curr.poster_path}
                description={truncateString(curr.overview)}
                />
            )
        })
        // const comingsoon = props.comingsoon.slice(0, 4).map(curr => {
        //     return(
        //         <Single
        //         key={curr.id}
        //         title={curr.title}
        //         details={curr.id}
        //         link={curr.poster_path}
        //         description={truncateString(curr.overview)}
        //         />
        //     )
        // })
        // const nowplaying = props.nowplaying.slice(0, 4).map(curr => {
        //     return(
        //         <Single
        //         key={curr.id}
        //         title={curr.title}
        //         details={curr.id}
        //         link={curr.poster_path}
        //         description={truncateString(curr.overview)}
        //         />
        //     )
        // })
        return(
    
            <>
                <div className={Styles.section}>{props.name}</div>
               <i className={`${Styles.right} ${Styles.arrow}`}></i>
               <i className={`${Styles.left} ${Styles.arrow}`}></i>
                <div className={Styles.grid}>
                {pop}
                {/* {nowplaying}*/}
                {toprated} 
                {/* {comingsoon}  */}
                </div>
            </>
        )
    }


export default structure;