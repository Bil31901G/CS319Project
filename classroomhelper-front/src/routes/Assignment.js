import { render } from '@testing-library/react';
import React, { Component } from 'react';
import "./Course.css"
import Home from './Home';

import NavBarInstructor from "../NavBar/NavBarInstructor"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class Assignment extends React.Component {
    componentWillMount() {
        this.props.history.push('/Assignment');
    }

    render() {
        return (

            <>
                <NavBarInstructor> </NavBarInstructor>
                <div className="Course">

                    <h1>
                        Assignment
            </h1>



                </div>
            </>
        )
    }
}