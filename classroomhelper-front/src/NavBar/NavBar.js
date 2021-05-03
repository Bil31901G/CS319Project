import React from "react"
import { slide as Menu } from 'react-burger-menu'
import navStyle from "./hamStyling.css"
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {

    showSettings(event) {
        event.preventDefault();
    }


    render() {
                    //Add other pages here

                    //I changed standard hyperlink to react router. Beacuse it did not work in the build
                    //I hope its fixed
        return (
            <>
                <Menu styles={navStyle} >
                    
                    <Link to="/Course">  <p id="Course" className="menu-item"   >Course</p> </Link>
                    <Link to="/MyGroup">  <p id="MyGroup" className="menu-item"  >MyGroup</p> </Link>
                    <Link to="/AllGroups">  <p id="AllGroups" className="menu-item">AllGroups</p> </Link>
                    <Link to="/People">  <p id="People" className="menu-item"   >People</p> </Link>
                    



                    {/* <a id="Course" className="menu-item" href="/Course">Course</a>
                    <a id="MyGroup" className="menu-item" href="/MyGroup">MyGroup</a>
                    <a id="AllGroups" className="menu-item" href="/AllGroups">AllGroups</a>
                    <a id="People" className="menu-item" href="/People">People</a> */}
                    
                </Menu>
            </>
        )


    }

}





