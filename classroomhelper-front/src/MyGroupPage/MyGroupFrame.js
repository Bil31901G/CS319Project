import React from 'react'
import MyGroup from './MyGroup'

export default class MyGroupFrame extends React.Component {

    constructor(){
        super()
        this.state = {
            groupObj: null
        }
    }

    render(){
        return (
            <>
            <div className="field5">
                <MyGroup id = {this.props.id} ></MyGroup>
            </div>
            </>
        )
    }
}
