import { render } from '@testing-library/react';
import React, { Component } from 'react';
import "./AllGroups.css"
import NavBarInstructor from "../NavBar/NavBarInstructor"
import GroupTableInstructor from "../Groups/GroupTableInstructor"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class AllGroupsInstructor extends React.Component {
    componentWillMount() {
        this.props.history.push('/AllGroupsInstructor');
    }



    render() {
        return (
            <>
                <NavBarInstructor></NavBarInstructor>



                <div className="AllGroups">

                    <h1>
                        All Groups
                    </h1>

                    <GroupTableInstructor></GroupTableInstructor>

                </div>
            </>
        )
    }
}