import React from 'react';
import {
    Link
} from "react-router-dom";
import AssignmentTableInstructor from "../Assignments/AssignmentTableInstructor";
import NavBarInstructor from "../NavBar/NavBarInstructor";
import "./Course.css";
export default class Assignment extends React.Component {
    componentDidMount() {
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
                    <Link to="/UploadAssignment">  <button>Upload Assignment</button>   </Link>

                    <AssignmentTableInstructor></AssignmentTableInstructor>
                </div>


            </>
        )
    }
}