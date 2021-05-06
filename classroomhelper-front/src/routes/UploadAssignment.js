import React from 'react';
import "./Home.css"
import {Link} from "react-router-dom";

export default class UploadAssignment extends React.Component {
    
    constructor(){
        super()
        this.handleAddCriteriaButton = this.handleAddCriteriaButton.bind(this)
        this.handleUploadClick = this.handleUploadClick.bind(this)
    }

    state = {
        numberOfCriterias: 0,
        criteriaArray: []
    }

    componentDidMount() {
        this.props.history.push('/UploadAssignment');
    }

    //When pressed upload sends data to API
    async handleUploadClick(){

    }

    //Takes values from text boxes and adds them to state
    handleAddCriteriaButton(){
        var criteriaInput = document.getElementsByClassName("NameField")[0].value
        var weightInput = document.getElementsByClassName("WeightField")[0].value

        const newNumberOfCriterias = this.state.numberOfCriterias + 1;
        const newCriteraArray = this.state.criteriaArray;
        newCriteraArray.push({"key": newNumberOfCriterias,"criteria":criteriaInput, "weight":weightInput});

        this.setState({
            numberOfCriterias: newNumberOfCriterias,
            criteriaArray: newCriteraArray
        })
    }

    //Deletes the Criteria when pressed on top of it.
    handleDeleteCriteriaButton(indexToDelete){

        const newCriteraArray = this.state.criteriaArray;
        newCriteraArray.splice(indexToDelete,1)
        const newNumberOfCriterias = this.state.numberOfCriterias - 1;
        this.setState({
            numberOfCriterias: newNumberOfCriterias,
            criteriaArray: newCriteraArray
        })
    }


    render() {
        //Prepare Criterias section
        var criteriasHTML = []

        for (let i = 0; i < this.state.numberOfCriterias; i++) {
            criteriasHTML.push(
            <div key={i}
            onClick={() => {
                this.handleDeleteCriteriaButton(i)
            }} 
            class="criteriaBox"> 
            Criteria:{this.state.criteriaArray[i].criteria}
            <br/>
            Weight:{this.state.criteriaArray[i].weight}
            </div>)
            
        }


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

            
                        <Link to="/Assignment">  <button class="button" onClick={this.handleUploadClick}>Upload</button>   </Link>

                </div>

                <div class="column">

                        <form><label> Criteria: <input className="NameField" type="text" name="Criteria" /> </label> </form>
                        <form><label> Weight: <input className="WeightField" type="text" name="Weight" /> </label> </form>
                        <button class="button" onClick={this.handleAddCriteriaButton}> Add Criteria</button>
                        {criteriasHTML}

                </div>

            </div>
        )
            
    }
}