import React, { useState } from 'react';
import moment from 'moment';
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai';
import '../RCA.css';


function CalendarHeader() { 
  
    const [ month, setMonth ] = useState(moment());
    const [ viewMonth, setViewMonth ] = useState(month.format('YYYY년 MM월'));
    
    return (
      <div className="RCA-header-container">
        <div className="RCA-header-buttons RCA-header-middle">
          <AiFillCaretLeft 
            className="move-button icon"
            onClick={() => 
                { setMonth(month.add(-1, 'months')); 
                setViewMonth(month.format('YYYY년 MM월')); 
                console.info(month) }
            }
          />
        </div>
        <div className="RCA-header-calendarYM RCA-header-middle">
          { viewMonth }
        </div>
        <div className="calHeaderBtn calHeaderAfterBtn">
          <AiFillCaretRight 
            className="move-button icon"
            onClick={() => { 
                setMonth(month.add(1, 'months')); 
                setViewMonth(month.format('YYYY년 MM월')); 
                console.info(month) }
            }
          />
        </div>
      </div>
    );
  }
  
  export default CalendarHeader;