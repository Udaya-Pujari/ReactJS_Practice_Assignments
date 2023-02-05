// import React, { useState } from "react";
// import { AgGridReact } from "ag-grid-react";
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';

// import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

// const CtxMenu = () => {
//   const [rowData, setRowData] = useState([
//     { make: "Toyota", model: "Celica", price: 35000, },
//     { make: "Ford", model: "Mondeo", price: 32000 },
//     { make: "Porsche", model: "Boxter", price: 72000 }
//   ]);

//   const columnDefs = [
//     { headerName: "Make", field: "make",editable:true },
//     { headerName: "Model", field: "model",editable:true },
//     { headerName: "Price", field: "price",editable:true}
//   ];

//   const handleClick = (e, data) => {
//     if (data.action === "addRow") {
//       setRowData([...rowData, { make: "", model: "", price: 0 }]);
//     } else if (data.action === "deleteRow") {
//       setRowData(rowData.filter((_, i) => i !== data.index));
//     }
//   };

//   return (
//     <div className="ag-theme-alpine" style={{ height: '500px', width: '750px', marginLeft: '10%', marginTop: '10%' }}>
//       {/* <ContextMenuTrigger id="cellMenu" > */}
//         <AgGridReact
//           columnDefs={columnDefs}
//           rowData={rowData}
//           context={{ componentParent: this }}
//         />
//       {/* </ContextMenuTrigger> */}
//       <ContextMenu id="cellMenu">
//         <MenuItem onClick={handleClick} data={{ action: "addRow", index: -1 }}>
//           Add Row
//         </MenuItem>
//         <MenuItem onClick={handleClick} data={{ action: "deleteRow", index: -1 }}>
//           Delete Row
//         </MenuItem>
//       </ContextMenu>
//     </div>
//   );
// };

// export default CtxMenu;



//add a row and delete a row

import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const CtxMenu = () => {
    const [rowData, setRowData] = useState([
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 },
    ]);
  
    const columnDefs = [
      { headerName: "Make", field: "make",editable:true },
      { headerName: "Model", field: "model",editable:true  },
      { headerName: "Price", field: "price",editable:true  },
    ];
  
    const addRow = () => {
      setRowData([...rowData, { make: "", model: "", price: "" }]);
    };
  
    const deleteRow = () => {
      if (rowData.length > 0) {
        setRowData(rowData.slice(0, rowData.length - 1));
      }
    };
  
    return (
      <div className="ag-theme-alpine" style={{ height: "500px", width: "600px",marginLeft:'15%',marginTop:'10%' }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
        />
        <br></br>
        <button onClick={addRow}>Add Row</button>&nbsp;&nbsp;
        <button onClick={deleteRow}>Delete Row</button>
      </div>
    );
  };
  export default CtxMenu;





