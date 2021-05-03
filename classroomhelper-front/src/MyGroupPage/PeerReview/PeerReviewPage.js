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
                        <input type="text" defaultValue="Point / 10"/> 
                        <input type="text" defaultValue="Additional Comments"/> </li> 
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

