import React from 'react';
import Styles from './Type.module.css'
const type = (props) => (<div className={Styles.card}>{props.children}</div>)

export default type;