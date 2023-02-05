import React from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
// import {Link} from 'react-router-dom'
import './abc.css'
import { Link } from 'react-router-dom';
const Sidebar = () => {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };




  return (
    <>
      <div className='col-md-12 row'>
        <div className='col-md-3'>

          <div className="container  drop">
            <div className="dropdown">
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
             Projects
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item">Project 1</a></li>
              <li><a className="dropdown-item">Project 2</a></li>
              <li><a className="dropdown-item">Project 3</a></li>
            </ul>
          </div>
          </div>



          <div className='sub_drop'>
            <Accordion style={{ width: "350px", backgroundColor: 'lightyellow' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Project Set Up</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <MenuList>
                  <Link to=''><MenuItem style={{ background: 'white' }} >Client Information</MenuItem></Link>
                  <MenuItem>Valuation Details</MenuItem>
                  <MenuItem>Company Details</MenuItem>
                  <MenuItem>Ownership Details</MenuItem>
                  <MenuItem>Industry Details</MenuItem>
                  <MenuItem>Comparable Public Companies</MenuItem>
                  <MenuItem> Compensation Information <span>(if applicable)</span></MenuItem>
                  <MenuItem>Discount Rate Assumption</MenuItem>
                </MenuList>
              </AccordionDetails>
            </Accordion>

            <Accordion style={{ width: "350px", backgroundColor: 'lightgrey' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Financial Statemnts</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <MenuList>
                  <MenuItem > Historical Income Statement &Adjustments</MenuItem>
                  <MenuItem>Adjustment Summary</MenuItem>
                  <MenuItem>Summary Adjusted IncomeStatement</MenuItem>
                  <MenuItem>Balance Sheet & Adjustments</MenuItem>
                  <MenuItem>Summary Adjusted BalanceSheet</MenuItem>
                </MenuList>
              </AccordionDetails>
            </Accordion>

            <Accordion style={{ width: "350px", backgroundColor: '#1F9BCD' }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Finacial Analysis</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <MenuList>
                  <MenuItem></MenuItem>
                </MenuList>
              </AccordionDetails>
            </Accordion>

            <Accordion style={{ width: "350px", backgroundColor: 'lightblue' }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Appraisal</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <MenuList>
                  <MenuItem></MenuItem>
                </MenuList>
              </AccordionDetails>
            </Accordion>

            <Accordion style={{ width: "350px", backgroundColor: 'lightblue' }} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Results</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <MenuList>
                  <MenuItem></MenuItem>
                </MenuList>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>


        <div className='col-md-9'>
          <div className="input-group mt-3">
            <label type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1">data</label>
          </div>
          <div className='col-md-1'>
            <Link to='/reactbootstrap'><button className='btn btn-primary' style={{marginTop:'60vh'}}> Accordian reference 2</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar