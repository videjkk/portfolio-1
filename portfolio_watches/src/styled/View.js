import styled from 'styled-components'

export const View = styled.span`
    font-size: 30px;
    line-height: 17px;
    padding-bottom: 11px;
    color:  #ADDECF;
    font-weight: '200';
    padding-bottom: 20px;
    border-bottom : 2px solid rgba(255, 255, 255, 0.1);
    opacity: 0.4;
    transition: all 1s ease;
    &&.active {
        opacity: 1;
        color: #fff;
        padding-bottom: 11px;
        border-bottom: 2px solid #fff;
    }
`