import React, { Component } from 'react';
import moment from 'moment';
import { createGlobalStyle } from 'styled-components';
import CalendarTemplate from '../components/CalendarTemplate';
import Header from '../components/CalendarHead';
import Calendar from '../components/Calendar';

const Globalstyle = createGlobalStyle`
body{
  background : #e9ecef;

}
`;

export default class Home extends Component {
    
    state = {
        calendarYM : moment(),
        today: moment(),
        selected : moment().format("YYYY-MM-DD")
    }

    static defaultProps = {
        clickFn : () => {}
    }

    moveMonth = (month) => {
        this.setState({
            calendarYM : this.state.calendarYM.add(month,'M')
        })
    }
    
    changeSelected = (clickedDate) => {
        if(moment(clickedDate).isSame(this.state.selected,'day')){
            this.props.clickFn(clickedDate);
            return;
        }
 
        this.setState({
            selected : clickedDate
        })
        this.props.clickFn(clickedDate);
        
        if(moment(clickedDate).isBefore(this.state.calendarYM,'month')){
            this.moveMonth(-1)
        }else if(moment(clickedDate).isAfter(this.state.calendarYM,'month')){
            this.moveMonth(1)
        }
    }

    render() {
        
        return (
            <div>
                <Globalstyle />
                <CalendarTemplate>
                    <Header calendarYM={this.state.calendarYM.format("YYYY년 MM월")}
                        moveMonth={this.moveMonth}
                    />
                    <Calendar 
                        YM={this.state.calendarYM.format("YYYY-MM-DD")}
                        selected={this.state.selected}
                        changeSelected={this.changeSelected} />
                </CalendarTemplate>
            </div>
        )
    }
}