import React from 'react';
import "./MyGroup.css"
import NavBar from "../NavBar/NavBar"

export default class MyGroup extends React.Component {
    componentWillMount(){
        this.props.history.push('/MyGroup');
    }

    render(){
        return(
            <>
            <NavBar> </NavBar>

            <div className="MyGroup">
            
            <h1>
                My Group
            </h1>

            </div>

            </>
        )
    }
}