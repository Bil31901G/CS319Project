import React from 'react'

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
                "userlist": ["dummy data",
                    "dummy data",
                    "dummy data",
                    "dummy data",
                    "dummy data"]
            }
        })
    }

    render() {

        return (
            <div>
                {
                    (this.state.loading || (this.state.groupInfo === null)) ?
                        <div>loading...</div>
                        :
                        <div className="my-group-name-list">
                            <h1>Group {this.props.id}</h1>
                            <ul>
                                <li>{this.state.groupInfo.userlist[0]}<button>Review</button></li>
                                <p></p>
                                <li>{this.state.groupInfo.userlist[1]}<button>Review</button></li>
                                <p></p>
                                <li>{this.state.groupInfo.userlist[2]}<button>Review</button></li>
                                <p></p>
                                <li>{this.state.groupInfo.userlist[3]}<button>Review</button></li>
                                <p></p>
                                <li>{this.state.groupInfo.userlist[4]}<button>Review</button></li>
                            </ul>
                        </div>

                }
            </div>

        )
    }
}