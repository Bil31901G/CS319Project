import React from 'react'
import FileDialogue from '../FileSelect/FileSelect'

export default class Assignment extends React.Component {

    state = {
        loading: true,
        assignmentInfo: null
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
            //dummy datas for assignment list (in course)
            assignmentInfo: {
                "id": [1, 2, 3, 4], "name": ["Analysis Report (dummy data)", "Analysis Report (dummy data)", "Analysis Report (dummy data)", "Analysis Report (dummy data)"], "dueDate": ["03.05.2021 (dummy data)", "03.05.2021 (dummy data)", "03.05.2021 (dummy data)", "03.05.2021 (dummy data)"]

            }
        })

    }

    render() {
        var rows = [];
        if (this.state.assignmentInfo !== null) {
            for (var i = 0; i < (this.state.assignmentInfo.name.length); i++) {
                rows.push(
                    <div   >
                        <li>{this.state.assignmentInfo.name[i]}</li>
                        <la>Due Date: {this.state.assignmentInfo.dueDate[i]}</la><la><FileDialogue></FileDialogue></la>
                    </div>)
            }
        }
        return (
            <div>
                {
                    (this.state.loading || (this.state.assignmentInfo === null)) ?
                        <div>loading...</div>
                        :
                        <div className="assignment-name-list">

                            <ul>

                                {rows}

                            </ul>
                        </div>

                }
            </div>

        )
    }
}