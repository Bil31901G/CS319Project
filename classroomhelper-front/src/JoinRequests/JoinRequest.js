import React from 'react'

export default class JoinRequest extends React.Component {

    state = {
        loading: true,
        joinRequestInfo: null
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
            joinRequestInfo: { "id": [1, 2, 3], "name": ["Name Surname (dummy data)", "Name Surname (dummy data)", "Name Surname (dummy data)"] }
        })
    }

    render() {
        var rows = [];
        if (this.state.joinRequestInfo !== null) {
            for (var i = 0; i < (this.state.joinRequestInfo.name.length); i++) {
                rows.push(
                    <div   >
                        <li>{this.state.joinRequestInfo.name[i]}<button>Accept</button><button>Decline</button></li>
                    </div>)
            }
        }
        return (
            <div>
                {
                    (this.state.loading || (this.state.groupInfo === null)) ?
                        <div>loading...</div>
                        :
                        <div className="joinRequest-name-list">
                            <h1>Join Requests {this.props.id}</h1>
                            <ul>
                                {rows}
                            </ul>
                        </div>

                }
            </div>

        )
    }
}