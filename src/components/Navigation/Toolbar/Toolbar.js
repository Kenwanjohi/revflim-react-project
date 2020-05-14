import React from 'react';
import Styles from './Toolbar.module.css';
import Navigationitems from '../Navigationitems/Navigationitems';
import Logo from '../../Logo/Logo';
import Buttons from '../Buttons/Buttons'
import Toggler from '../Toggler/Toggler'
const toolbar = (props) => {
    return(
        <header className={Styles.header}>
            <Logo/>
            <nav className={Styles.nav}>
                <Navigationitems/>
            </nav>
            <div className={Styles.buttons}>
            <Buttons/>
            </div>
            <div className={Styles.toggler}>
            <Toggler click={props.clicked}/>
            </div>

        </header>
    )
};
export default toolbar;