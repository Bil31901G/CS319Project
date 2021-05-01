import React from 'react';
import "./MyGroup.css"
import NavBar from "../NavBar/NavBar"
import AssignmentTable from "../MyGroupPage/AssignmentTable"
import MyGroupTable from '../MyGroupPage/MyGroupTable';
import JoinRequestTable from "../MyGroupPage/JoinRequestTable"

export default class MyGroup extends React.Component {
    componentDidMount(){
        this.props.history.push('/MyGroup');
    }

    
    render(){
        return(
            <>
            <NavBar> </NavBar>

            <div className="MyGroup">
            
            <h1>
                My Group
            </h1>

            </div>
            <div className="tableStyling">
                <MyGroupTable/>
            </div>
            <AssignmentTable/>
            <JoinRequestTable/>
            </>
        )
    }
}