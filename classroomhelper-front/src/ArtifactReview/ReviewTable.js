import React from 'react'

import DocViewerFrame from "./DocViewerFrame"
export default class ReviewTable extends React.Component {

    async componentDidMount(){
        //I could not test this part. Technically it successfully fetchs a pdf. Might need some server spesific settings.
        // var response = await fetch("https://681c5d6a-be24-42b8-b9e7-885328e48bf3.mock.pstmn.io/getPDF?id=1",{
        //   headers:{
        //     "Content-Type": "application/pdf"
        //   }
        //   })
    
        //   const newData = await response.blob()
        //   console.log("new data", newData)
        //   console.log("blob", (new Response(newData).text()))
        //   this.setState({
        //     loading: false,
        //     data: newData
        //   })
    
          //Dummy Data
    
        //Fetch change grading criteria here
    
          
      }

    constructor(){
        super()
        //Bind Dummy Data functions
        this.onClickChangeAR1 = this.onClickChangeAR1.bind(this)
        this.onClickChangeDR1 = this.onClickChangeDR1.bind(this)
        this.onClickChangeF = this.onClickChangeF.bind(this)
        this.onClickChangeAR2 = this.onClickChangeAR2.bind(this)
        this.onClickChangeDR2 = this.onClickChangeDR2.bind(this)
    }
    state = {
        docID : 1
    }
    //Dummy Data
    onClickChangeAR1(){
        console.log(1)
        this.setState({
            docID: 1
        })
    }
    onClickChangeDR1(){
        console.log(2)
        this.setState({
            docID: 2
        })
    }
    onClickChangeF(){
        console.log(3)
        this.setState({
            docID: 3
        })
    }
    onClickChangeAR2(){
        console.log(4)
        this.setState({
            docID: 4
        })
    }
    onClickChangeDR2(){
        console.log(5)
        this.setState({
            docID: 5
        })
    }
    render() {

        //Change buttons 

        //PDF Viewer

        //Comment Viewer

        //Send Form

        return (
            <div>
                <button  onClick={this.onClickChangeAR1}> Analyis Report</button>
                <button  onClick={this.onClickChangeDR1}> Design Report</button>
                <button  onClick={this.onClickChangeF}> Final Report</button>
                <button7  onClick={this.onClickChangeAR2}> Analyis Report Iteration 2</button7>
                <button7  onClick={this.onClickChangeDR2}> Design Report Iteration 2</button7>
                
                <DocViewerFrame key={this.state.docID} id={this.state.docID}> </DocViewerFrame>
            </div>
        )
    }
}

