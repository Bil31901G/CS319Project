import React from 'react'

export default class JoinRequest extends React.Component {

    state = {
        loading: true,
        requestInfo : null
    }

    async componentDidMount(){

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
            joinRequestInfo: { "id": [1, 2, 3], "name": ["Name Surname (dummy data)", "Name Surname (dummy data)", "Name Surname (dummy data)"]}})
    }
    
    render(){
       
        return (
            <div>
                {
                    (this.state.loading || (this.state.groupInfo === null)) ? 
                    <div>loading...</div> 
                    :
                    <div className="joinRequest-name-list">
                    <h1>Join Requests {this.props.id}</h1>
                    <ul>
                        <li>{this.state.joinRequestInfo.name[0]}<button>Accept</button><button>Decline</button></li>
                        <li>{this.state.joinRequestInfo.name[1]}<button>Accept</button><button>Decline</button></li>
                        <li>{this.state.joinRequestInfo.name[2]}<button>Accept</button><button>Decline</button></li>
                    </ul>
                </div>
           
                } 
            </div>
                
        )
    }
}