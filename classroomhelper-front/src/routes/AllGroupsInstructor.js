import React from 'react';
import GroupTable from "../Groups/GroupTable";
import NavBarInstructor from "../NavBar/NavBarInstructor";
import "./AllGroups.css";
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

                    <GroupTable></GroupTable>

                </div>
            </>
        )
    }
}