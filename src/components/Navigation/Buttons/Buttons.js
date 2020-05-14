import React from 'react';
import Button from '../../Button/Button';
const buttons = () => {
    return(
        <div>
            <Button link={'/signin'} bordered>sign in</Button>
            <Button link={'/signup'} red>sign up</Button>
        </div>
    )
};

export default buttons;