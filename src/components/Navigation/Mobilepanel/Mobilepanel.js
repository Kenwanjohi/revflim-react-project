import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../Navigationitems/Navigationitems';
import Buttons from '../Buttons/Buttons';
import Styles from './Mobilepanel.module.css';
const mobilepanel = (props) => {
    let classes = [Styles.card, Styles.close];
    if(props.open) {
        classes = [Styles.card, Styles.open];
    }
    return(
        <div className={classes.join(' ')}>
            <div className={Styles.logo}>
            <Logo/>
            </div>
            <div onClick={props.closepanel} className={Styles.times} typeof="button">&#10005;</div>
            <nav className={Styles.nav}>
            <Navigationitems/>
            </nav>
            <Buttons/>
        </div>
    )
};

export default mobilepanel;