import React from 'react'
import AddGroupFrame from './AddGroupFrame'
import GroupFrame from './GroupFrame'
import "./GroupTable.css"


export default class GroupTable extends React.Component {

    state = {
        loading: true,
        availableGroupIDs : null
    }
    
    async componentDidMount(){

        //This part is commented because, fake database api request has limited usage. Change link to api revelant api endpoint.

        // const url = "https://0fb8886f-8d61-4bc9-9b01-4362a104ed54.mock.pstmn.io/group?id=" + this.props.id
        // const response = await fetch(url);
        // const data = await response.json();
        // this.setState({
        //     loading: false,
        //     availableGroupIDs: data
        // })

        this.setState(
        {
            loading: false,
            availableGroupIDs:[1,2,3,4,5,6,7,8,9,10]
        })

    }

    // addGroupFrameClickHandler(){
    //     console.log("Im clicked!");
    // }

    render(){

        var rows = [];
        if (this.state.availableGroupIDs !== null) {
            for (var i = 0; i < (this.state.availableGroupIDs.length); i++) {
                rows.push(
                    <div key={"col " + i} className="column"  >
                        <GroupFrame id={this.state.availableGroupIDs[i]}> </GroupFrame>
                    </div>)
            }
        }
        rows.push(<div key={"AddGroupButton"} className="columnAddGroup" onClick={() =>{ alert("click")} } ><AddGroupFrame > </AddGroupFrame></div>)
        return( 
            <div>{
                this.state.loading ? 
                <div>loading...</div> 
                :
                <div>{rows}</div>
            }</div>

        )
    }
}
