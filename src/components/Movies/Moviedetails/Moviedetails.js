import React, { Component } from 'react'
import Toolbar from '../../Navigation/Toolbar/Toolbar'
class Moviedetails extends Component {
    state = {
        results: [],
    }
    componentDidMount() {

    }
    render() {
        return(
            <Toolbar/>
        )
    }
}
export default Moviedetails;