import { render } from '@testing-library/react';
import React, { Component } from 'react';
import "./MyGroup.css"
import NavBar from "../NavBar/NavBar"
import MyGroupTable from "../MyGroupPage/MyGroupTable"
import AssignmentTable from "../Assignments/AssignmentTable"
import JoinRequestTable from "../JoinRequests/JoinRequestTable"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import JoinRequest from '../JoinRequests/JoinRequest';
export default class MyGroup extends React.Component {
    componentWillMount() {
        this.props.history.push('/MyGroup');
    }

    render() {
        return (
            <>
                <NavBar> </NavBar>

                <div className="MyGroup">

                    <h1>
                        My Group
                </h1>

                    <MyGroupTable></MyGroupTable>
                    <AssignmentTable></AssignmentTable>
                    <JoinRequestTable></JoinRequestTable>
                </div>

            </>
        )
    }
}