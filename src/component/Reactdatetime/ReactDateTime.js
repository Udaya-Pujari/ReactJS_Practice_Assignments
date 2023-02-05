import React from 'react'
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
const ReactDateTime = () => {
    return (
        <div>
            <div className='col-md-2' style={{marginLeft:'40px'}}>
                <Datetime>

                </Datetime>
            </div>
        </div>
    )
}

export default ReactDateTime