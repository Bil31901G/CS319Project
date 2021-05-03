import React from 'react';
import "./Course.css"
import { Link } from "react-router-dom";

export default class FirstPage extends React.Component {

    render() {
        return (
            <div className="Course">

                <p>
                    Welcome to Classroom Helper.
                </p>

                <Link to="/InstructorSignUp"><button>Instructor</button></Link>
                <Link to="/Home"><button>Student</button></Link>


            </div>
        )
    }
}