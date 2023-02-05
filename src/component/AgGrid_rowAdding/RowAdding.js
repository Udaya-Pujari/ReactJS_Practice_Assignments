// import { useState } from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';

// const columnDefs = [
//     { headerName: "ID", field: "id" },
//     { headerName: "Name", field: "name" },
//     { headerName: "Age", field: "age" }
// ];

// function RowAdding() {
//     const [gridData, setGridData] = useState([
//         { id: 1, name: 'John Doe', age: 25 },
//         { id: 2, name: 'Jane Smith', age: 32},
//     ]);

//     function handleAddRow() {
//         const newRow = { id: gridData.length + 1, name: '', age: "" };
//         setGridData([...gridData, newRow]);
//     }

//     return (
//         <div className="ag-theme-alpine" style={{ height: '500px', width: '600px',marginLeft:'30%',marginTop:'5%'}}>
//             <button onClick={handleAddRow}>Add Row</button> <br></br>
//             <AgGridReact
//                 columnDefs={columnDefs}
//                 rowData={gridData}

//             />
//         </div>
//     );
// }
// export default RowAdding




/*  1.need to implement the contextmenu to the cells
    2.contxt menu is like rightClick button which will display arectagular side-popup
    3.Rect-context-menu
*/



import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const RowAdding = () => {
    // const [gridOptions, setGridOptions] = useState({});
    const [rowData, setRowData] = useState([
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Smith', age: 32 },
        { id: 3, name: 'Jerry Dreake', age: 2 },        
    ]);

    const menuButtonRenderer = (params) => {
        return (
            <span style={{ float: "right" }} onClick={handleAddRow}><i className="fa fa-plus-square" /></span>
            
        );
    };


    const columnDefs = [
        { headerName: "ID", field: "id", cellRenderer: menuButtonRenderer, width: 420,},
        { headerName: "Name", field: "name" },
        { headerName: "Age", field: "age" },

    ]

    function handleAddRow() {
        const newRow = { id: rowData.length + 1, name: '', age: "" };
        setRowData([...rowData, newRow]);
    }

    return (
        <div className="ag-theme-alpine" style={{ height: '500px', width: '750px', marginLeft: '10%', marginTop: '10%' }}>
            <AgGridReact
                // gridOptions={gridOptions}
                columnDefs={columnDefs}
                rowData={rowData}
            />
        </div>
    );
}

export default RowAdding;











// import React, { useState } from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// const RowAdding = () => {
//     const [gridOptions, setGridOptions] = useState({});
//     const [columnDefs, setColumnDefs] = useState([]);
//     const [rowData, setRowData] = useState([
//         { make: "Toyota", model: "Celica", price: 35000 },
//         { make: "Ford", model: "Mondeo", price: 32000 },
//         { make: "Porsche", model: "Boxter", price: 72000 }
//     ]);

//     useState(() => {
//         setColumnDefs([
//             { headerName: "Make", field: "make" },
//             { headerName: "Model", field: "model" },
//             { headerName: "Price", field: "price" }
//         ]);
//         setGridOptions({
//             onCellContextMenu: (event) => {
//                 console.log("Cell right-clicked: ", event);
//             }
//         });
//     }, []);

//     return (
//         <div className="ag-theme-alpine" style={{ height: '500px', width: '600px',marginLeft:'20%',marginTop:'10%' }}>
//             <AgGridReact
//                 gridOptions={gridOptions}
//                 columnDefs={columnDefs}
//                 rowData={rowData}
//                 onCellContextMenu={(event) => {
//                     console.log("Cell right-clicked: ", event);
//                 }}
//             />
//         </div>
//     );
// }

// export default RowAdding;








