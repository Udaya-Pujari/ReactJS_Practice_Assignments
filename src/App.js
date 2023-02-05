
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import AgGrid from './component/AG grid/AgGrid'; 
// import AgGrid2 from './component/AG grid/AgGrid2';
// import formvalidation from './component/formvalidation/formvalidation';
import Sidebar from './component/SidebarWithDropDown/sidebar/Sidebar';
import AccordianTable from './component/AccordiantableReactBootstrap/AccordianTable';
import DatePicker from './component/datePicker/DatePicker';
import ReactDateTime from './component/Reactdatetime/ReactDateTime';
import RowAdding from './component/AgGrid_rowAdding/RowAdding';
import CtxMenu from './component/AgGrid_context_menu/CtxMenu';
import EditableTable from './component/Reactjs_EditableTable/EditableTable';

// import Luckysheet from './component/luckysheet/luckysheets';
function App() {
  return (
    <div className="App">
     
      {/* <AgGrid/> <br></br> */}
      {/* <AgGrid2/> */}
      
      {/* <hr></hr>
      <formvalidation/> */}
       <BrowserRouter>
          <Routes>
          <Route exact path='/' element={<Sidebar/> }></Route>
          <Route exact path='/reactbootstrap' element={<AccordianTable/>}></Route>
          {/* <Route exact path='/lucky' element={<Luckysheet/>}></Route> */}
          <Route exact path='/datepicker' element={<DatePicker/>}></Route>
          <Route exact path='/Reactdate' element={<ReactDateTime/>}></Route>
          <Route exact path='/rowadding' element={<RowAdding/>}></Route>
          <Route exact path='/meubar' element={<CtxMenu/>}></Route>
          <Route exact path='/editable' element={<EditableTable/>}></Route>
          </Routes>
       </BrowserRouter>

      
    </div>
  );
}

export default App;
