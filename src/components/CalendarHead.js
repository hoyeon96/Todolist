import React, { Component } from 'react';
import '../RCA.css';
import styled from 'styled-components';
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai';
 
const CalHeadBlock = styled.div`
    width:100%;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    background-color: rgb(224, 215, 202);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default class Header extends Component {
    render() {
        return (
            <CalHeadBlock>
                <div className="header-buttons">
                    <AiFillCaretLeft 
                        className="move-button icon"
                        onClick={()=>{this.props.moveMonth(-1)}}
                    />
                </div>
               <h2>
                    {this.props.calendarYM}
                </h2>
                <div className="calHeaderBtn calHeaderAfterBtn">
                    <AiFillCaretRight 
                        className="move-button icon"
                        onClick={()=>{this.props.moveMonth(1)}}
                    />
                </div>
                <h3>
                    {this.props.today}
                </h3>
            </CalHeadBlock>
        )
    }
}