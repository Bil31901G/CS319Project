import React from 'react'
import "./Comment.css"
import EvalForm from "./EvalForm"
export default class CommentSection extends React.Component {
    
    state = {
        //Dummy Data for demo
        loading: false,
        criteriaSize: 4,
        gradeingCriteria: {
            "diagrams" : 25,
            "style" :  25,
            "logic" : 25,
            "completeness" : 25
          },
          comments: [
            {
                "comment": "You should be able to do this and that.",
                "diagrams":25,
                "style": 22,
                "logic": 44,
                "completeness": 82,
            },
            {
                "comment": "Your sequance diagram is wrong Fix it like this.",
                "diagrams":33,
                "style": 43,
                "logic": 88,
                "completeness": 90,
            },
            {
                "comment": "Please add a dark-mode. If a program does not have a dark mode, its garbage",
                "diagrams":33,
                "style": 43,
                "logic": 88,
                "completeness": 90,
            }
        ]
    }

    

    render() {
        var commentDiv = []
        
        for(var i = 0; i < this.state.comments.length; i++){
            var commentsInside = []
            for ( var x in this.state.comments[i]){
                
                commentsInside.push(
                    <div key={i+x}>
                        {x} : {this.state.comments[i][x]}
                    </div>
                )

            }
            //Has to work this.state.comments.length times
            commentDiv.push(
                <div key={"outterDiv"+i} className="column" >
                    <div className="field8">
                    <p>Comment {i+1} </p> <br/>
                        {commentsInside}
                     </div>
                 </div>
            )

        }

        return (
            <>
            <div>
                {commentDiv}
            </div>
            <EvalForm graCrit={this.state.gradeingCriteria}></EvalForm>
            </>
        )
    }
}
