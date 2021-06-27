import React , { Component } from 'react';
import moment from 'moment';
import '../RCA.css';
import styled, {css} from 'styled-components';
import {MdAdd} from 'react-icons/md';

const CalBodyBlock = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
    display: grid;
    grid-template-rows: repeat(6, 1fr);
`;
const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
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
   
        const Day = moment(firstDayFormat).add('d', i);
        _days.push({
          yearMonthDayFormat: Day.format("YYYY-MM-DD"),
          getDay: Day.format('D'),
          isHolyDay: false,
          weekIndex
        });
      }
   
      return _days;
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
          <div 
            className={"calendar-day " + className} 
            key={`${dayInfo.weekIndex}-${i}-day`}
            onClick={() => fn(dayInfo.yearMonthDayFormat)} >
            <label className="calendar-day-label">
              {dayInfo.getDay}
            </label>
          </div>
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
   
      const firstDayOfWeek = firstDayOfMonth.clone().add('d', -firstDateOfMonth);
   
      const _Weeks = [];
   
      for (let i = 0; i < 6; i++) {
        _Weeks.push((
          <Week 
            key={`calendar-week-${i}`} 
            weekIndex={i}
            ymOfThisCalendar={firstDayOfMonth.format("YYYY-MM")}
            firstDayOfThisWeekformat={firstDayOfWeek.clone().add('d', i *7).format("YYYY-MM-DD")}
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