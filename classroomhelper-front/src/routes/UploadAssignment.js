import React from 'react';
import "./Home.css"
import {Link} from "react-router-dom";

export default class UploadAssignment extends React.Component {

    state = {
        numberOfCriteria: 0
    }

    componentDidMount() {
        this.props.history.push('/UploadAssignment');
    }

    handleUploadClick(){

    }


    handleAddCriteriaButton(){
  
    }

    render() {

        return (
            <div class="grid-container">
                <div class="column">
                            <p>
                                Upload Assignment
                            </p>

                        <form>
                            <label>
                                Description:
                        <input type="text" name="Description" />
                            </label>
                        </form>

                        <form>
                            <label>
                                Due Date:
                        <input type="text" name="Due Date" />
                            </label>
                        </form>

            
                        <Link to="/Assignment">  <button onClick={this.handleUploadClick}>Upload</button>   </Link>

                </div>

                <div class="column">
                        <button class="button" onClick={this.handleAddCriteriaButton}> Add Criteria</button>
                </div>

            </div>
        )
            
    }
}