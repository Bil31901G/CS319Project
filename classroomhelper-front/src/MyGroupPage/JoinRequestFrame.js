import React from 'react'
import JoinRequest from './JoinRequest'

export default class JoinRequestFrame extends React.Component {

    constructor(){
        super()
        this.state = {
            groupObj: null
        }
    }

    render(){
        return (
            <>
            <div className="field3" >
                <h2>Join Requests</h2>
                <JoinRequest id = {this.props.id} ></JoinRequest>
            </div>
            </>
        )
    }
}
