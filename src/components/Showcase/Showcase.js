import React from 'react';
import Showcase from '../../assets/showcase.jpg';
import Styles from './Showcase.module.css';
const showcase = () => {
    const background = {
        backgroundImage: `url(${Showcase})`,

}
    return(
        <section className={Styles.section} style={background}>
            <div className={Styles.flex}>
                <p>Discover your favorite movies and tv shows</p>
            </div>
        </section>
    )
};

export default showcase;