// import React, { useRef, useEffect } from "react";
// import jspreadsheet from "jspreadsheet-ce";

// import "../../../node_modules/jspreadsheet-ce/dist/jspreadsheet.css";
//  function AgGrid2() {
//   const jRef = useRef(null);
//   const options = {
//     minDimensions: [10, 10],
//     columns: [{ type: "html", width: 400, title: "HTML" }],
   
//   };

//   useEffect(() => {
//     if (!jRef.current.jspreadsheet) {
//       jspreadsheet(jRef.current, options);
//     }
//   }, [options]);

//   const addRow = () => {
//     jRef.current.jexcel.insertRow();
//   };

//   return (
//     <div>
//       <div ref={jRef} />
//       <br />
//       <input type="button" onClick={addRow} value="Add new row" />
//     </div>
//   );
// }




// export default AgGrid2;
import Spreadsheet from "react-spreadsheet";
import { useState } from "react";

export default function AgGrid2(){
const [data, setData] = useState([
	[{ value: "Historical Income Statement"}, {  },{}, {  }],
	[{ value: "GfG2" }, { value: "GfG4" },{ value: "2" }, { value: "2" }],
    [{ value: "GfG1" }, { value: "GfG3" },{ value: "3" }, { value: "4" }],
	[{ value: "GfG2" }, { value: "GfG4" }],
]);
return(
<div>
	<h4>SpreadSheet - GeeksforGeeks</h4>
	<Spreadsheet data={data} onChange={setData} />
</div>
)
	
};
