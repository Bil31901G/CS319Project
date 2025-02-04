import React from 'react';
import "./Home.css"
import { Link} from "react-router-dom";

export default class InstructorSignUp extends React.Component {
    componentDidMount() {
        this.props.history.push('/InstructorSignUp');
    }



    render() {
        return (
            <div className="field2">
                <header>
                    <p>
                        Classroom Helper
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
                        Password:
                  <input type="text" name="Password" />
                    </label>
                </form>

                <Link to="/CourseRegInstructor">  <button>Login</button>   </Link>
                <Link to="/SignUpPageInstructor">  <button>Sign-up</button>   </Link>
            </div>
        )
            ;
    }
}
