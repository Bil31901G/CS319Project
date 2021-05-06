import React from 'react';
import "./AllGroups.css"
import NavBar from "../NavBar/NavBar"
import GroupTable from "../Groups/GroupTable"
import ReviewTable from "../ArtifactReview/ReviewTable"

export default class AllGroups extends React.Component {

    constructor(){
        super()
        this.handleReviewRequest = this.handleReviewRequest.bind(this)
    }

    state = {
        reviewID: null
    }

    componentDidMount(){
        this.props.history.push('/AllGroups');
    }

    handleReviewRequest(id){
        this.setState({
            reviewID: id
        })
    }

    render(){

        var reviewTable = (this.state.reviewID === null) ? <></> : 
        <div >
        <h1>Group {this.state.reviewID}</h1>
        <ReviewTable revID={this.state.reviewID} />
        </div>

        return(
            <>
                <NavBar></NavBar>

                <div className="AllGroups">

                    <h1>
                        All Groups
                    </h1>

                    <GroupTable handleRevReq={this.handleReviewRequest}></GroupTable>

                </div>

                <div className="row">
                    {reviewTable}
                </div>
            </>   
        )
    }
}