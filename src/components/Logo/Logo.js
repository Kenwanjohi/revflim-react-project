import React from 'react';
import Styles from './Logo.module.css'
const logo = props => {
    return(
        <div className={Styles.logo}><a className={Styles.link} href="/"><span className={Styles.brand}>rev</span>flim</a></div>
    )
};
export default logo;