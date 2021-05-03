import React from 'react'
import PersonsFrame from './PersonsFrame'
import "./PersonsTable.css"


export default class PersonsTable extends React.Component {

    state = {
        loading: true,
        enrolledUsersIDs: null
    }

    async componentDidMount() {

        //This part is commented because, fake database api request has limited usage. Change link to api revelant api endpoint.

        // const url = "/people" + this.props.id
        // const response = await fetch(url);
        // const data = await response.json();
        // this.setState({
        //     loading: false,
        //     enrolledUsersIDs: data
        // })

        this.setState(
            {
                loading: false,
                enrolledUsersIDs: [1]
            })

    }

    render() {

        var rows = [];
        if (this.state.enrolledUsersIDs !== null) {
            for (var i = 0; i < (this.state.enrolledUsersIDs.length); i++) {
                rows.push(
                    <div key={"col " + i} className="columnPerson"  >
                        <PersonsFrame id={this.state.enrolledUsersIDs[i]}>
                        </PersonsFrame>
                    </div>)
            }
        }
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
