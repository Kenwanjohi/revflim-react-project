import React from 'react';
import Styles from './Button.module.css'
const button = (props) => {
    return(
    <a href={props.link} className={[Styles.button, props.bordered ? Styles.bordered : Styles.red].join(' ')} >{props.children}</a>
    )
};

export default button;