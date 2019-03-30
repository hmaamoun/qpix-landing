import React, { PureComponent } from 'react';
import { Button as AntdButton } from "antd";
import styled from 'styled-components'
const StyledButton = styled(AntdButton)`
    &&{
        width:${props => props.block ? ('100%') : ('auto')};
        float:${props => props.float || 'none'};
        margin:${props => props.margin || 'auto'};
        font-size:22px;
        ${props=>props.type==="primary"?(`
            background-color:${props.theme.secondary};
            color:${props.theme.primary};
            &:hover{
                background-color:${props.theme.secondary};
                color:${props.theme.primary};
                transform: scale(1.1);
            }
            &:focus{
                background-color:${props.theme.secondary};
                color:${props.theme.primary};
            }
        `):('')}
        line-height:22px;
        font-weight:bold;
        transition: 0.5s;
        padding: 18px 15px;
        border:0;
        border-radius:5px;
        height:auto;
    }
`
class Button extends PureComponent {
    render() {
        return (

            <StyledButton {...this.props}>
                {this.props.children}
            </StyledButton>
        );
    }
}

export default Button;