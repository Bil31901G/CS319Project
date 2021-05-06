import React from 'react'
import { Link } from "react-router-dom";
export default class MyGroup extends React.Component {

    state = {
        loading: true,
        groupInfo: null
    }

    async componentDidMount() {

        //This part is commented because, fake database api request has limited usage. 

        // const url = "https://0fb8886f-8d61-4bc9-9b01-4362a104ed54.mock.pstmn.io/group?id=" + this.props.id
        // const response = await fetch(url);
        // const data = await response.json();
        // this.setState({
        //     loading: false,
        //     groupInfo: data
        // })

        this.setState({
            loading: false,
            groupInfo: {
                "id": 1,
                "name": "1A",
                "userlist": ["Tuna Dalbeler",
                    "Onur Korkmaz",
                    "Ezgi Saygılı",
                    "Funda Tan",
                    "Cem Öztürk"]
            }
        })
    }

    render() {
        var rows = [];
        if (this.state.groupInfo !== null) {
            for (var i = 0; i < (this.state.groupInfo.userlist.length); i++) {
                rows.push(
                    <div   >
                        <li>{this.state.groupInfo.userlist[i]} </li>
                        
                        <p></p>

                    </div>)
            }
        }
        return (
            <div>
                {
                    (this.state.loading || (this.state.groupInfo === null)) ?
                        <div>loading...</div>
                        :
                        <div className="my-group-name-list">
                            <h1>Group {this.props.id}</h1>
                            <ul>
                                {rows}
                            </ul>
                            <Link to="/ReviewPage">  <button >Evaluate Peers</button> </Link>
                        </div>

                }
            </div>

        )
    }
}