import React from 'react'
import img from "../resources/plus.png"
export default class AddGroupFrame extends React.Component {

    
    render(){
        return (
            <div >
                <h2> Add New Group </h2>
                <div>
                    <img src={img} alt="add group button" width="125px" height="auto">
                    </img>
                </div>
            </div>
        )
    }
}