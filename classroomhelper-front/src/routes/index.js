import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Course from './Course';
import MyGroup from './MyGroup';
import AllGroups from './AllGroups';
import People from './People';
import AllGroupsInstructor from './AllGroupsInstructor';
import InstructorSignUp from './InstructorSignUp';
import FirstPage from './FirstPage';
import SignUpPageInstructor from './SignUpPageInstructor';
import SignUpPageStudent from './SignUpPageStudent';
import CourseInstructor from './CourseInstructor';
import Assignment from './Assignment';
import PeopleInstructor from './PeopleInstructor';
export default () =>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={FirstPage} />
            <Route path="/Home" component={Home} />
            <Route path="/Course" component={Course} />
            <Route path="/MyGroup" component={MyGroup} />
            <Route path="/AllGroups" component={AllGroups} />
            <Route path="/People" component={People} />
            <Route path="/AllGroupsInstructor" component={AllGroupsInstructor} />
            <Route path="/FirstPage" component={FirstPage} />
            <Route path="/SignUpPageInstructor" component={SignUpPageInstructor} />
            <Route path="/SignUpPageStudent" component={SignUpPageStudent} />
            <Route path="/InstructorSignUp" component={InstructorSignUp} />
            <Route path="/CourseInstructor" component={CourseInstructor} />
            <Route path="/Assignment" component={Assignment} />
            <Route path="/PeopleInstructor" component={PeopleInstructor} />
        </Switch>
    </BrowserRouter>;