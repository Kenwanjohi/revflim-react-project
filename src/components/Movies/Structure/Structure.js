import React from 'react';
import Styles from './Structure.module.css';
import Spinner from '../../Spinner/Spinner';
const structure = (props) => {      
    return(

    <div className={Styles.card}>
    <div className={Styles.section}>{props.section}</div>
        {props.isloading ? 
            <Spinner>loading...</Spinner>:
            (
                (props.isError) ? 
                <div>{props.errorstring}</div> :
                <>
                <i className={[Styles.left, Styles.arrow, props.currentPage === 1? Styles.display : null].join(' ')} onClick={ () => props.changePageHandler('prev', props.sec)}></i>
                <i className={[Styles.right, Styles.arrow, props.currentPage === (props.results.length / 4)? Styles.display : null].join(' ')}  onClick={ () => props.changePageHandler('next', props.sec)}></i>
                {/* {renderButtons()} */}
                <div className={Styles.grid}>
                    {props.data}
                </div>
                </>
            )

        }
        </div>
       
    )
}


export default structure;