import React from 'react';
import Styles from './Toggler.module.css';
const toggler = (props) => {
    return(
        <div onClick={props.click} className={Styles.card} type='button'>
           <span className={[Styles.top, Styles.bar].join(' ')}></span> 
           <span className={`${Styles.middle} ${Styles.bar}`}></span> 
           <span className={[Styles.bottom, Styles.bar].join(' ')}></span> 
        </div>
    )
};

export default toggler;