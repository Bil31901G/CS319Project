import React from 'react'

export default class Courses extends React.Component {

    state = {
        loading: true,
        courseInfo: null
    }
    // Get info for a particulaor course.
    async componentDidMount() {

        //This part is commented because, fake database api request has limited usage. 

        // const url = "https://0fb8886f-8d61-4bc9-9b01-4362a104ed54.mock.pstmn.io/group?id=" + this.props.id
        // const response = await fetch(url);
        // const data = await response.json();
        // this.setState({
        //     loading: false,
        //     courseInfo: data
        // })

        this.setState({
            loading: false,
            courseInfo: {
                "courseName": ["CS319"],
                "section": [1],
                "Instructor": ["Eray Tüzün"]
            }
        })
    }

    render() {
        var rows = [];
        if (this.state.courseInfo !== null) {
            for (var i = 0; i < (this.state.courseInfo.courseName.length); i++) {
                rows.push(
                    <div   >
                        <li>Course code:  {this.state.courseInfo.courseName[i]}</li>
                        <li>Section:  {this.props.id}</li>
                        <li>Instructor:  {this.state.courseInfo.Instructor[i]}</li>
                    </div>)
            }
        }
        return (
            <div>
                {
                    (this.state.loading || (this.state.courseInfo === null)) ?
                        <div>loading...</div>
                        :
                        <div className="group-name-list">

                            <ul>
                                {rows}
                            </ul>
                        </div>

                }
            </div>

        )
    }
}