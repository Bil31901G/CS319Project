import React from 'react';
import "./AllGroups.css"
import NavBar from "../NavBar/NavBar"
import GroupTable from "../Groups/GroupTable"

export default class AllGroups extends React.Component {
    componentWillMount(){
        this.props.history.push('/AllGroups');
    }


    render(){
        return(
            <>
                <NavBar></NavBar>

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