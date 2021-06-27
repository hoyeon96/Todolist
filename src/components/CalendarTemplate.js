import React from 'react';
import styled from 'styled-components';

const CalendarTemplateBlock = styled.div`
    width : 512px;
    height : 768px;
    
    position : relative; /*하위 요소 배치 조정을 위해 */
    background : white;
    border-radius : 16px;
    box-shadow : 0 0 8px 0 rgba(0,0,0,.04);
    margin : 0 auto; /*가운데 정렬을 위해 */
    margin-top : 96px;
    margin-bottom : 32px;
    display : flex; 
    flex-direction : column; /* 배치 방향 세로로 */
`;

function CalendarTemplate({children}){
    return <CalendarTemplateBlock>{children}</CalendarTemplateBlock>;
}

export default CalendarTemplate;