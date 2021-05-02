import { render } from '@testing-library/react';
import React, { Component } from 'react';
import "./Home.css"
import CourseInstructor from './CourseInstructor';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class InstructorSignUp extends React.Component {
    componentWillMount() {
        this.props.history.push('/InstructorSignUp');
    }



    render() {
        return (
            <div className="Home">
                <header>
                    <p>
                        Classroom Helper
              </p>
                </header>
                <form>
                    <label>
                        Email:
                  <input type="text" name="Email" />
                    </label>
                </form>

                <form>
                    <label>
                        Password:
                  <input type="text" name="Password" />
                    </label>
                </form>

                <Link to="/CourseInstructor">  <button>Login</button>   </Link>
                <Link to="/SignUpPageInstructor">  <button>Sign-up</button>   </Link>

            </div>
        )
            ;
    }
}
