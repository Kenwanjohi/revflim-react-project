import React from 'react';
import Styles from './Navigationitems.module.css';
import Navigationitem from '../Navigationitem/Navigationitem';
const navigationItems = () => {
    return(
        <ul className={Styles.list}>
            <Navigationitem active link={'/movies'} >Movies</Navigationitem>
            <Navigationitem link={'/movies'} >Tv Shows</Navigationitem>
            <Navigationitem link={'/movies'} >Community</Navigationitem>
            <Navigationitem link={'/movies'} >contact us</Navigationitem>
        </ul>
    )
};

export default navigationItems;