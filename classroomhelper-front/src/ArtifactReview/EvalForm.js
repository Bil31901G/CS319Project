import React from 'react'
import "./Comment.css"
export class EvalForm extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler(){


        //Submit part



         //***************mock key expired. replace************** */
        //  var response = fetch("https://0fb8886f-8d61-4bc9-9b01-4362a104ed54.mock.pstmn.io/group", {
        //     method: "POST",
        //  })

        // var result = (await response).ok;
        // console.log("response", result)
        var result = true;

        if(result === true){
            alert("Submitted")
        }



    }
    render() {
        var gradeingCriteria = {
            "diagrams" : 25,
            "style" :  25,
            "logic" : 25,
            "completeness" : 25
          }
          var rows = []
          rows.push( <div> Comments: <input></input></div>);

          for (const x in gradeingCriteria){
            rows.push(<div> {x}: <input></input> /{gradeingCriteria[x]} </div>);
          }
        return (
            <div className="evalForm">
                <div className="field8">
                This is review form
                <form>{rows}</form>
                <button onClick={this.submitHandler}>Submit</button>
                </div>
            </div>
        )
    }
}

export default EvalForm
