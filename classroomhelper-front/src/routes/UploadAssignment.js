import { render } from '@testing-library/react';
import React, { Component } from 'react';
import "./Home.css"
import CourseInstructor from './CourseInstructor';
import Assignment from "./Assignment";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
export default class UploadAssignment extends React.Component {
    componentWillMount() {
        this.props.history.push('/UploadAssignment');
    }



    render() {
        return (
            <div className="Home">
                <header>
                    <p>
                        Upload Assignment
              </p>
                </header>
                <form>
                    <label>
                        Description:
                  <input type="text" name="Description" />
                    </label>
                </form>

                <form>
                    <label>
                        Due Date:
                  <input type="text" name="Due Date" />
                    </label>
                </form>


                <Link to="/Assignment">  <button>Upload</button>   </Link>

            </div>
        )
            ;
    }
}