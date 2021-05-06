import React from 'react';
import "./Home.css"
import { Link } from "react-router-dom";

export default class SignUpPageStudent extends React.Component {
    componentWillMount() {
        this.props.history.push('/SignUpPageStudent');
    }



    render() {
        return (
            <div className="Home">
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

                <Link to="/Home">  <button>Sign-up</button>   </Link>

            </div>
        )
            ;
    }
}
