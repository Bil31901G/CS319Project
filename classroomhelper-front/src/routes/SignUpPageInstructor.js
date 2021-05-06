import React from 'react';
import "./Home.css"
import { Link } from "react-router-dom";


export default class SignUpPageInstructor extends React.Component {
    componentWillMount() {
        this.props.history.push('/SignUpPageInstructor');
    }



    render() {
        return (
            <div className="Home">
                <button2>
                <header>
                    <p>
                        Sign-up
              </p>
                </header>
                <form>
                    <label>
                        Email:
                  <input type="text" name="Email" />
                    </label>
                </form>

                <form>
                    <label>
                        Full Name:
                  <input type="text" name="FullName" />
                    </label>
                </form>

                <form>
                    <label>
                        Password:
                  <input type="text" name="Password" />
                    </label>
                </form>

                <Link to="/CourseRegInstructor">  <button>Sign-up</button>   </Link>
                </button2>
            </div>
        )
            ;
    }
}
