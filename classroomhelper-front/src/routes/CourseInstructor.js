import { render } from '@testing-library/react';
import React, { Component } from 'react';
import "./Course.css"
import Home from './Home';
import Assignment from './Assignment';
import NavBarInstructor from "../NavBar/NavBarInstructor"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class CourseInstructor extends React.Component {
    componentWillMount() {
        this.props.history.push('/CourseInstructor');
    }

    render() {
        return (

            <>
                <NavBarInstructor> </NavBarInstructor>
                <div className="Course">

                    <h1>
                        Course
            </h1>



                </div>
            </>
        )
    }
}