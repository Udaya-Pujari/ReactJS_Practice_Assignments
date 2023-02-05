import React, { useRef, useEffect } from "react";
import jspreadsheet from "jspreadsheet-ce";
import "/node_modules/jspreadsheet-ce/dist/jspreadsheet.css";
import { useState } from "react";
// import { height } from "@mui/system";


export default function AgGrid() {


  const [title, setTitle] = useState();
  const jRef = useRef(null);
  const options = {
    columns: [
      { type: 'text', width: 150, wordWrap: true },
      { type: 'text', width: 210, wordWrap: true },
      { type: 'text'},
      {},
      {},
      {},
      {},
      { type: 'text', width: 210, wordWrap: true },

    ],
    data:
      [

        {
          title: '',
          title1: 'Historical Income Statements:',
          title2: '',
          title3: '',
          title4: '',
          title5: '',
          title6: '',
          title7: 'Historical Income Statement Common-size:',
          title8: '',
          title9: '',
          title10: '',
          title11: '',
          title12: '',
        },
        {
          title2: 'FYE',
          title3: 'FYE',
          title4: 'FYE',
          title5: 'FYE',
          title6: 'FYE',
          title7: '',
          title8: 'FYE',
          title9: 'FYE',
          title10: 'FYE',
          title11: 'FYE',
          title12: 'FYE'
        },
        {
          title: '',
          title1: '',
          title2: 'Year 1',
          title3: 'Year 2',
          title4: 'Year 3',
          title5: 'Year 4',
          title6: 'Year 5',
          title7: '',
          title8: 'Year 1',
          title9: 'Year 2',
          title10: 'Year 3',
          title11: 'Year 4',
          title12: 'Year 5'
        },
        {
          title: '',
          title1: 'Revenues  ($)               (Revenues Growth Rate %)',
          title2: '12',
          title3: '10',
          title4: '100',
          title5: '110',
          title6: '10'
        },
        {},
        {
          title: '',
          title1: 'Cost of Revenues',
          title2: '12',
          title3: '2',
          title4: '70',
          title5: '50',
          title6: '1'
        },
        {},
        {
          title: '',
          title1: 'Gross Profit',
          title2: '=SUM(C4-C6)',
          title3: '=SUM(D4-D6)',
          title4: '=SUM(E4-E6)',
          title5: '=SUM(F4-F6)',
          title6: '=SUM(G4-G6)',
          title7: '',
          title8: '=IFERROR(C8/$C$4,"0%")',
          title9: '=IFERROR(D8/$D$4,"0%")',
          title10: '=IFERROR(E8/$E$4,"0%")',
          title11: '=IFERROR(F8/$F$4,"0%")',
          title12: '=IFERROR(G8/$G$4,"0%")',
        },
        {
          title: '',
          title1: 'Gross Profit Margin %',
          title2: '=IFERROR(C8/$C$4,"")',
          title3: '=IFERROR(D8/$D$4,"")',
          title4: '=IFERROR(E8/$E$4,"")',
          title5: '=IFERROR(F8/$F$4,"")',
          title6: '=IFERROR(G8/$G$4,"")',
          // title7:'',
          // title8:'=IFERROR(C8/$C$4,"0%")',
          // title9:'=IFERROR(D8/$D$4,"0%")',
          // title10:'=IFERROR(E8/$E$4,"0%")',
          // title11:'=IFERROR(F8/$F$4,"0%")',
          // title12:'=IFERROR(G8/$G$4,"0%")',
        },

      ]
    ,
    minDimensions: [15, 15],
    rowResize: true,
    rows: {
      10: { height: '150px' }
    },
    mergeCells: {
      // B1:[6,1],
      A12: [7,1]
  },
    cells: {
      A11:{type:'text'}
  },
    toolbar: [

      {
        type: "select",
        k: "font-family",
        v: ["Arial", "Verdana", "Italic"]
      },
      // {
      //   type: "i",
      //   content: "save",
      //   onclick: function () {
      //     jRef.current.jexcel.download();
      //   }
      // },
      {
        type: "i",
        content: "format_align_left",
        k: "text-align",
        v: "left"
      },
      {
        type: "i",
        content: "format_align_center",
        k: "text-align",
        v: "center"
      },
      {
        type: "i",
        content: "format_align_right",
        k: "text-align",
        v: "right"
      },
      {
        type: "color",
        content: "format_color_text",
        k: "color"
      },
      {
        type: "i",
        content: "format_bold",
        k: "font-weight",
        v: "bold"
      },
      {
        type: "color",
        content: "format_color_fill",
        k: "background-color"
      },
    ]
  };

  useEffect(() => {
    if (!jRef.current.jspreadsheet) {
      jspreadsheet(jRef.current, options);
    }

    fetch("http://localhost:3000/Languages").then((result) => {
      result.json().then((response) => {
        // console.log(response)
        setTitle(response)
      })
    })
  }, [options]);
  console.log(title)

  // const addRow = () => {
  //   jRef.current.jexcel.insertRow();
  // };
  // const addColumn = () => {
  //   jRef.current.jexcel.insertColumn();
  // };
  // const deleteColumn = () => {
  //   jRef.current.jexcel.deleteColumn();

  // };
  // const deleteRow = () => {
  //   jRef.current.jexcel.deleteRow();
  // };

  return (
    <div style={{ marginLeft: '250px', marginTop: '100px' }}>
      <div ref={jRef} />
      <br /><br></br>

      {/* <input type="button" onClick={addRow} value="Add new row" /><span> </span>
      <input type="button" onClick={addColumn} value="Add new col" /><span> </span> 
      <input type="button" onClick={deleteRow} value="delete row" /><span> </span> 
      <input type="button" onClick={deleteColumn} value="delete col" /><span> </span>  */}
    </div>
  );
}
