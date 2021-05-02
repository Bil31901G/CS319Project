import { render } from '@testing-library/react';
import React, { Component } from 'react';
import "./AllGroups.css"
import AllCoursesTable from "../AllCourses/AllCoursesTable"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class CourseRegInstructor extends React.Component {
    componentWillMount() {
        this.props.history.push('/CourseRegInstructor');
    }



    render() {
        return (
            <>

                <div className="AllGroups">

                    <h1>
                        All Courses
                    </h1>

                    <AllCoursesTable></AllCoursesTable>

                </div>
            </>
        )
    }
}