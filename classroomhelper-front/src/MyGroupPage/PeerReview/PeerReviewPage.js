import React from 'react'
import NavBar from '../../NavBar/NavBar';

export default class PeerReviewPage extends React.Component {

    constructor(){
        super()
        this.submitHandle = this.submitHandle.bind(this)
    }
    state = {
        groupInfo: null
    }

    submitHandle(){
        alert("submit clicked")
        
        var namesj =[]
        var pointsj = []
        var commentsj = []

        for (let i = 0; i < this.state.groupInfo.userlist.length; i++) {
            namesj.push(this.state.userlist.userlist[i])
            pointsj.push(document.getElementsByClassName("point_field")[i])
            commentsj.push(document.getElementsByClassName("comment_field")[i])
        }

        var data ={
            names : namesj,
            points: pointsj,
            comments: commentsj
        }
        var json = JSON.parse(data);

        console.log(json)
    }

    async componentDidMount(){
        this.props.history.push('/ReviewPage');

        //This part is commented because, fake database api request has limited usage. 
        //***************mock key expired. replace************** */
        // const url = "https://0fb8886f-8d61-4bc9-9b01-4362a104ed54.mock.pstmn.io/group?id=" + this.props.id
        // const response = await fetch(url);
        // const data = await response.json();
        // this.setState({
        //     loading: false,
        //     groupInfo: data
        // })

        this.setState({
            groupInfo: {
                "id": 1,
                "name": "1A",
                "userlist": ["dummy data",
                    "Name Surname",
                    "dummy data",
                    "dummy data",
                    "dummy data"]
            }
        })
    }

    render() {

        var rows = [];
        if (this.state.groupInfo !== null) {
            for (var i = 0; i < (this.state.groupInfo.userlist.length); i++) {
                rows.push(
                    <div>
                        <li>{this.state.groupInfo.userlist[i]} 
                        <input className="point_field" type="text" defaultValue="Point / 10"/> 
                        <input className="comment_field" type="text" defaultValue="Additional Comments"/> </li> 
                    </div>)
            }
        }

        return (
            <>
            <NavBar></NavBar>
            <div className="Course">
            
            <h1>
                Review Page
            </h1>
            {rows}
            <button onClick={this.submitHandle}>Submit</button>
            </div>

            </>
        )
    }
}

