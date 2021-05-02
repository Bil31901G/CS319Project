import React from 'react'
import AssignmentFrameInstructor from './AssignmentFrameInstructor'
import "./AssignmentTableInstructor.css"


export default class AssignmentTableInstructor extends React.Component {

    state = {
        loading: true,
        availableAssignmentIDs: null
    }

    async componentDidMount() {

        //This part is commented because, fake database api request has limited usage. Change link to api revelant api endpoint.

        // const url = "https://0fb8886f-8d61-4bc9-9b01-4362a104ed54.mock.pstmn.io/group?id=" + this.props.id
        // const response = await fetch(url);
        // const data = await response.json();
        // this.setState({
        //     loading: false,
        //     availableGroupIDs: data
        // })

        this.setState(
            {
                loading: false,

            })

    }

    render() {

        var rows = [];
        rows.push(
            <div key={"col "} className="columnAssignmentInstructor">
                <AssignmentFrameInstructor> </AssignmentFrameInstructor>
            </div>)




        return (
            <div>{
                this.state.loading ?
                    <div>loading...</div>
                    :
                    <div>{rows}</div>
            }</div>

        )
    }
}
