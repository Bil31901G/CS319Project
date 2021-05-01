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
                <JoinRequest id = {this.props.id} ></JoinRequest>
            </>
        )
    }
}
