import { render } from '@testing-library/react';
import React, { Component } from 'react';
import "./Course.css"
import Home from './Home';
import MyGroup from './MyGroup';
import NavBar from "../NavBar/NavBar"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
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