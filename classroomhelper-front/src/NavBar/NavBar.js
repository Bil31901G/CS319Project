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
                    
                    <Link to="/Course">  <a id="Course" className="menu-item"   >Course</a> </Link>
                    <Link to="/MyGroup">  <a id="MyGroup" className="menu-item"  >MyGroup</a> </Link>
                    <Link to="/AllGroups">  <a id="AllGroups" className="menu-item">AllGroups</a> </Link>
                    <Link to="/People">  <a id="People" className="menu-item"   >People</a> </Link>
                    



                    {/* <a id="Course" className="menu-item" href="/Course">Course</a>
                    <a id="MyGroup" className="menu-item" href="/MyGroup">MyGroup</a>
                    <a id="AllGroups" className="menu-item" href="/AllGroups">AllGroups</a>
                    <a id="People" className="menu-item" href="/People">People</a> */}
                    
                </Menu>
            </>
        )


    }

}





