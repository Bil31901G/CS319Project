import React from 'react'
import "./Comment.css"
export default class CommentSection extends React.Component {
    state = {
        loading: true,
        commentInfo: null
    }

    async componentDidMount() {

        //This part is commented because, fake database api request has limited usage. 

        // const url = "https://0fb8886f-8d61-4bc9-9b01-4362a104ed54.mock.pstmn.io/group?id=" + this.props.id
        // const response = await fetch(url);
        // const data = await response.json();
        // this.setState({
        //     loading: false,
        //     commentInfo: data
        // })

        this.setState({
            loading: false,
            //dummy datas for assignment list (in course)
            commentInfo: {
                "names": ["diagrams", "style", "logic", "completeness", "Weighted Grade"],
                "gradeWeights": [20, 30, 20, 20, 20]

            }
        })

    }
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

        var rows = [];
        if (this.state.commentInfo !== null) {
            for (var i = 0; i < (this.state.commentInfo.names.length); i++) {
                rows.push(
                    <div   >
                        <li>{this.state.commentInfo.names[i]} : {this.state.commentInfo.gradeWeights[i]}</li>

                    </div>)
            }
        }

        //Its 5.20 am. Im gonna hard code this for now. Fetch and soft code later. I will have time.
        return (
            <div>
                <div className="column" >
                    Comment 1 <br></br>
                     You should do it like this.
                     <u1 >
                        {rows}
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
