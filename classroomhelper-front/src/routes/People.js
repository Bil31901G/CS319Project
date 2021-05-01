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
import PersonsTable from "../Persons/PersonsTable"
export default class People extends React.Component {
    componentWillMount() {
        this.props.history.push('/People');
    }

    render() {
        return (


            <>
                <NavBar> </NavBar>
                <div className="People">

                    <h1>
                        People
            </h1>
                    <PersonsTable></PersonsTable>
                </div>
            </>
        )
    }
}