import React from 'react'
import { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './DatePicker.css'
const DatePicker = () => {

  const [selectedDate, setSelectedDate] = useState(null)


  return (
    <div style={{ marginLeft: '4%', marginTop: '5%' }}>
      <ReactDatePicker

        
        selected={selectedDate}
        onChange={(date) => { setSelectedDate(date) }}
        dateFormat='MM/dd/yyyy'
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
      >

      </ReactDatePicker>
    </div>
  )
}

export default DatePicker