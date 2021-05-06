import React from 'react';
import NavBarInstructor from "../NavBar/NavBarInstructor";
import "./AllGroups.css";
import GroupTableInstructor from "../Groups/GroupTableInstructor"

export default class AllGroupsInstructor extends React.Component {
    componentWillMount() {
        this.props.history.push('/AllGroupsInstructor');
    }



    render() {
        return (
            <>
                <NavBarInstructor></NavBarInstructor>



                <div className="AllGroups">

                    <h1>
                        All Groups
                    </h1>

                    <GroupTableInstructor></GroupTableInstructor>

                </div>
            </>
        )
    }
}