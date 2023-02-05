import React from 'react'
import './AccordianTable.css'
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

const AccordianTable = () => {
    return (
        <>
            <div>
                <div className='col-md-12 row'>
                    <div className='col-md-2'>
                        <Accordion>
                            <Accordion.Item eventKey="0" >
                                <Accordion.Header><span style={{color:'red'}}>Project Setup</span></Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup variant="primary">
                                       <Link to='/'> <ListGroup.Item variant="primary">Valuation Details</ListGroup.Item></Link>
                                       <Link to=''><ListGroup.Item>Company Details</ListGroup.Item></Link>
                                       <Link to=''><ListGroup.Item>Ownership Details</ListGroup.Item></Link>
                                       <Link to=''><ListGroup.Item>Industry Details</ListGroup.Item></Link>
                                       <Link to=''><ListGroup.Item>Comparable Public Companies</ListGroup.Item></Link>
                                       <Link to=''><ListGroup.Item> Compensation Information <span>(if applicable)</span></ListGroup.Item></Link>
                                       <Link to=''><ListGroup.Item>Discount Rate Assumption</ListGroup.Item></Link>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><span style={{color:'red'}}>Finacial Statemnts</span></Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item >Historical Income Statement &Adjustments</ListGroup.Item>
                                        <ListGroup.Item>Adjustment Summary</ListGroup.Item>
                                        <ListGroup.Item>Summary Adjusted IncomeStatement</ListGroup.Item>
                                        <ListGroup.Item>Balance Sheet & Adjustments</ListGroup.Item>
                                        <ListGroup.Item>Summary Adjusted BalanceSheet</ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2" >
                                <Accordion.Header><span style={{color:'red'}}>Finacial analysis</span></Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="3" >
                                <Accordion.Header><span style={{color:'red'}}>Appraisal</span></Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" >
                                <Accordion.Header><span style={{color:'red'}}>Results</span></Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                        <ListGroup.Item></ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            
                        </Accordion>
                    </div>
                    <div className='col-md-9' style={{ backgroundColor: 'lightyellow' }} >
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccordianTable