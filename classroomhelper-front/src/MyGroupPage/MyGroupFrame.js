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
                <MyGroup id = {this.props.id} ></MyGroup>
            </>
        )
    }
}
