import React from 'react';
import "./Course.css"
import NavBarInstructor from "../NavBar/NavBarInstructor"

export default class CourseInstructor extends React.Component {
    componentDidMount() {
        this.props.history.push('/CourseInstructor');
    }

    render() {
        return (

            <>
                <NavBarInstructor> </NavBarInstructor>
                <div className="Course">

                    <h1>
                        Course
            </h1>



                </div>
            </>
        )
    }
}