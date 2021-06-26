import React , { Component } from 'react';
import moment from 'moment';
import CalendarHeader from '../components/CalendarHead';
import DateHeader from '../components/DateHeader';

export default class Home extends Component {
    
    state = {
        calendarYM : moment(),
        today : moment()
    }

    moveMonth = (month) => {
        this.setState({
            calendarYM : this.state.calendarYM.add(month,'M')
        })
    }

    
    render() {
        
        return (
            <div className="test-layout">
                <div className="RCA-app-container">
                    <CalendarHeader 
                        calendarYM={this.state.calendarYM.format("YYYY년 MM월")}
                        today={this.state.today.format("현재 YYYY - MM - DD")}
                        moveMonth={this.moveMonth}
                    />
                    <DateHeader />
                </div>
            </div>
        )
    }
}