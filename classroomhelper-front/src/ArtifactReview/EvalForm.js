import React from 'react'
import "./Comment.css"
export class EvalForm extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler(){

        //Todo


    }
    render() {
        var gradeingCriteria = {
            "diagrams" : 25,
            "style" :  25,
            "logic" : 25,
            "completeness" : 25
          }
          var rows = []
          for (const x in gradeingCriteria){
            rows.push(<div> {x}: <input></input> /{gradeingCriteria[x]} </div>);
          }
        return (
            <div className="evalForm">
                This is eval form
                <form>{rows}</form>
                <button onClick={this.submitHandler}>Submit</button>
            </div>
        )
    }
}

export default EvalForm
