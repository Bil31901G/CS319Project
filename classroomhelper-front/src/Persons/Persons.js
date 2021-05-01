import React from 'react'

export default class Persons extends React.Component {

    state = {
        loading: true,
        personalInfo: null

    }

    async componentDidMount() {

        //This part is commented because, fake database api request has limited usage. 

        // const url = "https://0fb8886f-8d61-4bc9-9b01-4362a104ed54.mock.pstmn.io/group?id=" + this.props.id
        // const response = await fetch(url);
        // const data = await response.json();
        // this.setState({
        //     loading: false,
        //     personalInfo: data
        // })

        this.setState({
            loading: false,
            //dummy datas for assignment list (in course)
            personalInfo: {
                "id": [21800000, 21800000, 21800000, 21800000], "name": ["zxcz", "asd", "qwe", "asd"]

            }
        })

    }

    render() {

        return (
            <div>
                {
                    (this.state.loading || (this.state.personalInfo === null)) ?
                        <div>loading...</div>
                        :
                        <div className="assignment-name-list">

                            <ol>

                                <li>{this.state.personalInfo.name[0] + " " + this.state.personalInfo.id[0]}</li>


                                <p>
                                </p>

                                <li>{this.state.personalInfo.name[1] + " " + this.state.personalInfo.id[1]}</li>

                                <p>
                                </p>

                                <li>{this.state.personalInfo.name[2] + " " + this.state.personalInfo.id[2]}</li>

                                <p>
                                </p>

                                <li>{this.state.personalInfo.name[3] + " " + this.state.personalInfo.id[3]}</li>

                            </ol>
                        </div>

                }
            </div>

        )
    }
}