import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Home from './Home';
import MyGroup from './MyGroup';
import "./People.css"
import NavBar from "../NavBar/NavBar"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class PeopleInstructor extends React.Component {
    componentWillMount() {
        this.props.history.push('/PeopleInstructor');
    }

    render() {
        return (


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