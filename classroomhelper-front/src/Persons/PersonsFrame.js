import React from 'react'
import Persons from './Persons'

export default class PersosnFrame extends React.Component {

    constructor() {
        super()
        this.state = {
            personOn: null
        }
    }

    render() {
        return (
            <>
            <div className="field9">
                <Persons id={this.props.id} ></Persons>
            </div>
            </>
        )
    }
}
