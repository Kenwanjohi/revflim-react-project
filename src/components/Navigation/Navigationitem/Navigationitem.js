import React from 'react';
import Styles from './Navigationitem.module.css';

const navigationItem = props => {
    return(
        <li className={Styles.item}>
            <a href={props.link} className={[Styles.link, props.active ? Styles.active : null].join(' ')}>{props.children}</a>
        </li>
    )
};

export default navigationItem