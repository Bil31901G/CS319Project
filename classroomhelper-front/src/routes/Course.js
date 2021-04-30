import React from 'react';
import "./Course.css"
import NavBar from "../NavBar/NavBar"
export default class Course extends React.Component {
    componentWillMount(){
        this.props.history.push('/Course');
    }

    render(){
        return(

            <>
            <NavBar> </NavBar>
            <div className="Course">
            
            <h1>
                Course
            </h1>

            </div>
            </>
        )
    }
}