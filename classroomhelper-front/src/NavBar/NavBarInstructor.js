import React from "react"
import { slide as Menu } from 'react-burger-menu'
import navStyle from "./hamStyling.css"
import { Link } from "react-router-dom";

export default class NavBarInstructor extends React.Component {

    showSettings(event) {
        event.preventDefault();
    }


    render() {
        //Add other pages here
        return (
            <>
                <Menu styles={navStyle} >
                    {/* <a id="CourseInstructor" className="menu-item" href="/CourseInstructor">Course</a>
                    <a id="Assignment" className="menu-item" href="/Assignment">Assignment</a>
                    <a id="AllGroupsInstructor" className="menu-item" href="/AllGroupsInstructor">AllGroups</a>
                    <a id="PeopleInstructor" className="menu-item" href="/PeopleInstructor">People</a> */}
                    
                    <Link to="/CourseInstructor">  <p id="CourseInstructor" className="menu-item"   >Course Instructor</p> </Link>
                    <Link to="/Assignment">  <p id="Assignment" className="menu-item"  >Assignment</p> </Link>
                    <Link to="/AllGroupsInstructor">  <p id="AllGroupsInstructor" className="AllGroupsInstructor">All Groups</p> </Link>
                    <Link to="/PeopleInstructor">  <p id="PeopleInstructor" className="menu-item"   >People Instructor</p> </Link>


                </Menu>
            </>
        )


    }

}



