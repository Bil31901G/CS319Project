import React from 'react'
import MyGroupFrame from './MyGroupFrame'
import "./MyGroupTable.css"

export default class MyGroupTable extends React.Component {

    state = {
        loading: true,
        groupId: null
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
                groupID: 1 //1 is a dummy data
            })

    }

    render() {

        var rows = [];
        if (this.state.availableGroupIDs !== null) {
            rows.push(
                <div key={"col " + 1} className="columnGroup"  >
                    <MyGroupFrame id={this.state.groupID}>
                    </MyGroupFrame>
                </div>)
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