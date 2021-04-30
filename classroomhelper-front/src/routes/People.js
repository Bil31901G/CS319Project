import React from 'react';
import "./People.css"
import NavBar from "../NavBar/NavBar"

export default class People extends React.Component {
    componentWillMount(){
        this.props.history.push('/People');
    }

    render(){
        return(


            <>
            <NavBar> </NavBar>
            <div className="People">
            
            <h1>
                People
            </h1>

            </div>
            </>
        )
    }
}