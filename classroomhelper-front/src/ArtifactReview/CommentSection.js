import React from 'react'
import "./Comment.css"
export default class CommentSection extends React.Component {
    
    render() {
        // console.log(this.props.comments)

        // var commentDiv = []
        
        // for(var i = 0; i < this.props.comments.length(); i++){
        //     commentDiv.push(
        //         <div className="column">
        //             {this.props.comments[i].comment}
        //             <u1>
        //                 <li>{this.props.graCrit.keys}</li>
        //             </u1>
        //         </div>
        //     )
        // }

        //Its 5.20 am. Im gonna hard code this for now. Fetch and soft code later. I will have time.
        return (
            <div>
                <div className="column" >
                    Comment 1 <br></br>
                     You should do it like this.
                     <u1 >
                        <li >"diagrams" : 25 / 100</li>
                         <li>"style" :  25 / 100</li>
                         <li>"logic" : 25 / 100</li>
                         <li>"completeness" : 25 / 100</li>
                         <li>"Weigted Grade" : 25 / 100</li>
                     </u1>
                 </div>
                 <div className="column">
                    Comment 2 <br></br>
                     You should do it like this.
                     <u1>
                        <li>"diagrams" : 25 / 100</li>
                         <li>"style" :  25 / 100</li>
                         <li>"logic" : 25 / 100</li>
                         <li>"completeness" : 25 / 100</li>
                         <li>"Weigted Grade" : 25 / 100</li>
                     </u1>
                 </div>
                 <div className="column">
                    Comment 3 <br></br>
                     You should do it like this.
                     <u1>
                        <li>"diagrams" : 25 / 100</li>
                         <li>"style" :  25 / 100</li>
                         <li>"logic" : 25 / 100</li>
                         <li>"completeness" : 25 / 100</li>
                         <li>"Weigted Grade" : 25 / 100</li>
                     </u1>
                 </div>
            </div>
        )
    }
}
