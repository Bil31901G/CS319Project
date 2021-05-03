import React from 'react';
import {
    Link
} from "react-router-dom";
import Courses from "./Courses";


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


