import React from 'react'
import AllCoursesFrame from './AllCoursesFrame'

import "./AllCoursesTable.css"

// Course info holder.
export default class AllCoursesTable extends React.Component {

    state = {
        loading: true,
        CourseIDs: null
    }
    //Get course ids available.
    async componentDidMount() {

        //This part is commented because, fake database api request has limited usage. Change link to api revelant api endpoint.

        // const url = "https://0fb8886f-8d61-4bc9-9b01-4362a104ed54.mock.pstmn.io/group?id=" + this.props.id
        // const response = await fetch(url);
        // const data = await response.json();
        // this.setState({
        //     loading: false,
        //     CourseIDs: data
        // })

        this.setState(
            {
                loading: false,
                CourseIDs: [1, 2]
            })

    }

    render() {

        var rows = [];
        if (this.state.CourseIDs !== null) {
            for (var i = 0; i < (this.state.CourseIDs.length); i++) {
                rows.push(
                    <div key={"col " + i} className="column"  >
                        <AllCoursesFrame id={this.state.CourseIDs[i]}>
                        </AllCoursesFrame>
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
