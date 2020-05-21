import React from 'react';
import Styles from './Logo.module.css'
import { Link } from 'react-router-dom'
const logo = props => {
    return(
        <div className={Styles.logo}><Link className={Styles.link} to={{ pathname: "/" }}><span className={Styles.brand}>rev</span>flim</Link></div>
    )
};
export default logo;