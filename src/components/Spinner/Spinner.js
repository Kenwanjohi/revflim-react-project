import React from 'react';
import Styles from './Spinner.module.css';
const spinner = (props) => {
    return (
        <div className={Styles.loader}>Loading...</div>
    );
};
export default spinner;
