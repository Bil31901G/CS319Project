import React from 'react'

import Courses from "./Courses"
import CourseInstructor from "../routes/CourseInstructor"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class AllCoursesFrame extends React.Component {

    constructor() {
        super()
        this.state = {
            courseObj: null
        }
    }

    render() {
        return (
            <>
                <Courses id={this.props.id} ></Courses>
                <Link to="/CourseInstructor">  <button>View</button>   </Link>

            </>
        )
    }
}


