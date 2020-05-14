import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Mobilepanel from '../Navigation/Mobilepanel/Mobilepanel';
class Layout extends Component {
    state = {
        showmobilepanel: false
    };
    mobilePanelHandler = () => {
        this.setState({showmobilepanel: true})
    }
    closepanelHandler = () => {
        this.setState(prevState => {
            return {showmobilepanel: !prevState.showmobilepanel}
        })
    }
    render() {
        return(
            <>
                <Mobilepanel open={this.state.showmobilepanel} closepanel={this.closepanelHandler}/>
                <Toolbar  clicked={this.mobilePanelHandler}/>
                <div>showcase section</div>
                <div>movies</div>
                <div>tv shows</div>
            </>
        )

    }
};
export default Layout;