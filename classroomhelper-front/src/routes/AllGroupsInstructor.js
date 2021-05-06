import React from 'react';
import NavBarInstructor from "../NavBar/NavBarInstructor";
import "./AllGroups.css";
import GroupTableInstructor from "../Groups/GroupTableInstructor"
import ReviewTable from "../ArtifactReview/ReviewTable"
export default class AllGroupsInstructor extends React.Component {
    constructor() {
        super()
        this.handleReviewRequest = this.handleReviewRequest.bind(this)
    }

    state = {
        reviewID: null
    }

    componentDidMount() {
        this.props.history.push('/AllGroupsInstructor');
    }

    handleReviewRequest(id) {
        this.setState({
            reviewID: id
        })
    }

    render() {

        var reviewTable = (this.state.reviewID === null) ? <></> :
            <div >
                <h1>Group {this.state.reviewID}</h1>
                <ReviewTable revID={this.state.reviewID} />
            </div>

        return (
            <>
                <NavBarInstructor></NavBarInstructor>

                <div className="AllGroups">

                    <h1>
                        All Groups
                    </h1>

                    <GroupTableInstructor handleRevReq={this.handleReviewRequest}></GroupTableInstructor>

                </div>

                <div className="row">
                    {reviewTable}
                </div>
            </>
        )
    }
}