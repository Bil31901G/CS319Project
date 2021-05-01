import React from 'react';
import "./Home.css"
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    componentWillMount(){
        this.props.history.push('/home');
    }

    

    render(){
        return(
            <div className="Home">
            <header>
              <p>
                Classroom Helper
              </p>
           </header>
              <form>
                <label>
                  Email:
                  <input type="text" name="Email"/>
                </label>
              </form>
    
              <form>
                <label>
                  Password:
                  <input type="text" name="Password" />
                </label>
              </form>
    
              <Link to="/Course">  <button>Login</button>   </Link>  
    
              <button>Sign-up</button>
           
          </div>
          )
        ;
    }
}
  