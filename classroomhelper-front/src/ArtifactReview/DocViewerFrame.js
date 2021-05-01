import DocViewer from "react-doc-viewer";
 
 export default function DocViewerFrame() {
  const docs = [
    { uri: "https://d1b10bmlvqabco.cloudfront.net/attach/hsg4u4sehyk2kx/hsg4ulhusig4id/ht82u99o2f9c/Get_Started_Flyer_Handout_MasteringPhysics.pdf" },
    //{ uri: require("./example-files/pdf.pdf") }, // Local File
  ];
 
  return <DocViewer documents={docs} />;
}
