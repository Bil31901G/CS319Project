import React from 'react';
import pdfData1 from "../resources/AR1.pdf"
import pdfData2 from "../resources/DR1.pdf"
import pdfData3 from "../resources/AR2.pdf"
import pdfData4 from "../resources/DR2.pdf"
import CommentSection from './CommentSection';
import EvalForm from "./EvalForm"
export default class DocViewerFrame extends React.Component {


  state ={
    loading: true,
    data: {
      pdf: null,
      assignmentID: null,
      gradeingCriteria: {
        "diagrams" : 25,
        "style" :  25,
        "logic" : 25,
        "completeness" : 25
      },
      comments : [
        {comment: "Do it like this",
        grades: [90,91,92,93]},
        {comment: "Do it like that",
        grades: [30,31,32,33]}
      ]
    },
    artifectIDs:[1,2,3,4,5]
  }

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

      switch (this.props.id) {
        case 1:
          this.setState({
            loading: false,
            data: pdfData1,
            comment: {
              name: "TA1",
              assignmentID: this.props.id
              
            }
          })
          break;
          case 2:
            this.setState({
              loading: false,
              data: pdfData2
            })
          break;
          case 3:
            this.setState({
              loading: false
            })
          break;
          case 4:
            this.setState({
              loading: false,
              data: pdfData3
            })
          break;
          case 5:
            this.setState({
              loading: false,
              data: pdfData4
            })
          break;
      
        default:
          break;
      }


      
  }


  render() {
    if(this.state.data.pdf === null && this.state.loading === true){
      return( <div>loading...</div>)
    }
    else if(this.state.data.pdf === null && this.state.loading === false){
      return( <div> Not Uploaded Yet </div>)
    }
    else{
      return (
        <>
        <div>
          <embed src={this.state.data} align="left" width="800px" height="1000px" />
          <CommentSection graCrit={this.state.data.gradeingCriteria} comments={this.state.data.comments}></CommentSection>
        </div>
        <div>
          <EvalForm graCrit={this.state.data.gradeingCriteria}></EvalForm>
        </div>
        </>
      )
    }
   
  }
}

