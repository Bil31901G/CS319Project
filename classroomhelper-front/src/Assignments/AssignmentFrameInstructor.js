import React from 'react'
import AssignmentsInstructor from './AssignmentsInstructor'

export default class AssignmentFrameInstructor extends React.Component {

    constructor() {
        super()
        this.state = {
            assignmentsObj: null
        }
    }


    render() {
        return (
            <>
                <h2>Uploaded Assignments</h2>
                <AssignmentsInstructor id={this.props.id} ></AssignmentsInstructor>
            </>
        )
    }
}
