import React from 'react'
import AddGroupFrame from './AddGroupFrame'
import GroupFrame from './GroupFrame'
import "./GroupTable.css"


export default class GroupTable extends React.Component {

    constructor(props) {
        super(props)

        this.addGroupFrameClickHandler = this.addGroupFrameClickHandler.bind(this)
    }

    state = {
        loading: true,
        availableGroupIDs: null,
    }

    async componentDidMount() {

        //Fetch which groups are available to display.

        //This part is commented because, fake database api request has limited usage. Change link to api revelant api endpoint.
        //***************mock key expired. replace************** */
        // const url = "/allGroups"
        // const response = await fetch(url);
        // const data = await response.json();
        // this.setState({
        //     loading: false,
        //     availableGroupIDs: data
        // })
        // console.log(data)
        this.setState(
            {
                loading: false,
                availableGroupIDs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
            })

    }

    async addGroupFrameClickHandler() {
        //***************mock key expired. replace************** */
        //  var response = fetch("https://0fb8886f-8d61-4bc9-9b01-4362a104ed54.mock.pstmn.io/group", {
        //     method: "POST",
        //  })

        // var result = (await response).ok;
        // console.log("response", result)
        var result = true;

        if (result === true) {
            window.location.reload(); //Not the most elegant way but does the job. lmao
        }
        else {
            alert("An error occured. Add group did not happen.")
        }
    }

    render() {

        var rows = [];
        if (this.state.availableGroupIDs !== null) {
            for (var i = 0; i < (this.state.availableGroupIDs.length); i++) {
                rows.push(
                    <div key={"col " + i} className="column"  >
                        <GroupFrame id={this.state.availableGroupIDs[i]}> </GroupFrame>
                    </div>)
            }
        }
        rows.push(<div key={"AddGroupButton"} className="columnAddGroup" onClick={this.addGroupFrameClickHandler} ><AddGroupFrame > </AddGroupFrame></div>)
        return (
            <div>{
                this.state.loading ?
                    <div>loading...</div>
                    :
                    <div>{rows}</div>
            }</div>

        )
    }
}
