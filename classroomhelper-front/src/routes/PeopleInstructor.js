import React from 'react';
import "./People.css"
import PersonsTable from '../Persons/PersonsTable';
import NavBarInstructor from '../NavBar/NavBarInstructor';
export default class PeopleInstructor extends React.Component {
    componentDidMount() {
        this.props.history.push('/PeopleInstructor');
    }

    render() {
        return (


            <>
                <NavBarInstructor> </NavBarInstructor>
                <div className="People">

                    <h1>
                        People
                </h1>

                    <PersonsTable></PersonsTable>
                </div>
            </>
        )
    }
}