import React , { Component } from 'react';
import moment from 'moment';
import '../RCA.css';
import styled, {css} from 'styled-components';
import {MdSearch} from 'react-icons/md';

const CalBodyBlock = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
    display: grid;
    grid-template-rows: repeat(6, 1fr);
`;
const CircleButton = styled.button`
  background: rgba(56,217,169,0.9);
  &:hover {
    background: #63e6be;
  }
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  bottom: 44px;
  left: 36px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: none;  /* Button 초기에는 안보이게 */
`;

const DayBlock = styled.div`
    &:hover { ${CircleButton} { display: flex; }
`;



const weekname = ["일", "월", "화", "수", "목", "금", "토"];
class DateHeader extends Component {
   
  mapArrayToDate = (dateArray) => {
        return dateArray.map((date, index) => {
          const className = ()=>{
            let className = "DateHeader";
            if(index === 0){
              return className + " date-sun"
            }else if(index === 6){
              return className + " date-sat"
            }else{
              return className + " date-weekday"
            }
          }
          return (
            <div className={className()} key={index}>
              {date}
            </div>
          )
        })
      }
   
    render() {
      return (
        <div className="calBodyHeader">
          {this.mapArrayToDate(weekname)}
        </div>
      )
    }
  }

  class Week extends Component {
 
    state = {}

   
    Days = (firstDayFormat, weekIndex) => {
      const _days = [];
   
      for (let i = 0; i < 7; i++) {
   
        const Day = moment(firstDayFormat).add(i, 'd');
        _days.push({
          yearMonthDayFormat: Day.format("YYYY-MM-DD"),
          getDay: Day.format('D'),
          isHolyDay: false,
          weekIndex
        });
      }
   
      return _days;
    }

    MovePage(e,param) {
      console.log(param);
      // console.log(e);
      // window.location.href = "/TodoPage/" + {param};
    }
   
    mapDaysToComponents = (Days, calendarMonthYear, selectedDayFormat ,fn = () => { }) => {
      const thisMonth = moment(calendarMonthYear);

      return Days.map((dayInfo, i) => {
        let className = "calBodyContentCell";
        if (!thisMonth.isSame(dayInfo.yearMonthDayFormat,'month')) {
          className = "calBodyContentCell outdate";
        } else if (i === 0) {
          className = "calBodyContentCell date-sun";
        } else if (i === 6) {
          className = "calBodyContentCell date-sat";
        }
        if(moment(dayInfo.yearMonthDayFormat).isSame(selectedDayFormat,'day')){
          className = "calBodyContentCell selected";
        }
        return (
          <DayBlock 
            className = {"calendar-day " + className} 
            key = {`${dayInfo.yearMonthDayFormat}`}
            onClick = {() => fn(dayInfo.yearMonthDayFormat)}
             >
            <label className="calendar-day-label">
              {dayInfo.getDay}
            </label>
            <div>
              <CircleButton 
                onClick={(e) => this.MovePage(e,this.props)} >
                      <MdSearch />
              </CircleButton>
            </div>
          </DayBlock>
        )
      })
    }
    render() {
      return (
        <div className="calendar-week">
          {this.mapDaysToComponents(this.Days(this.props.firstDayOfThisWeekformat,this.props.weekIndex),
          this.props.ymOfThisCalendar,
          this.props.selected,
          this.props.fn
          )}
        </div>
      )
    }
  }
  
  export default class Calendar extends Component {

    Weeks = (monthYear, selected, clickFn) => {
      const firstDayOfMonth = moment(monthYear).startOf('month');
      const firstDateOfMonth = firstDayOfMonth.get('d');
   
      const firstDayOfWeek = firstDayOfMonth.clone().add(-firstDateOfMonth, 'd');
   
      const _Weeks = [];
   
      for (let i = 0; i < 6; i++) {
        _Weeks.push((
          <Week 
            key={`calendar-week-${i}`} 
            weekIndex={i}
            ymOfThisCalendar={firstDayOfMonth.format("YYYY-MM")}
            firstDayOfThisWeekformat={firstDayOfWeek.clone().add(i * 7, 'd').format("YYYY-MM-DD")}
            selected={selected}
            fn={clickFn} />
        ))
      }
      return _Weeks;
    }
   
    render() {
      return (
        <div>
          <DateHeader />
          <CalBodyBlock>
            {this.Weeks(this.props.YM,this.props.selected,this.props.changeSelected)}
            
          </CalBodyBlock>
        </div>
      )
    }
  }