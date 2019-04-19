import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import LogoImage from '../assets/img/qpix-logo.png'
const Logo = styled.img`
    width:114px;
`
const Link = styled.span`
    font-size:16px;
    color:white;
    cursor:pointer;
    transition:0.5s;
    margin-left:40px;
    line-height:50px;
    transform:translateY(0px);
    display:block;
    &:hover{
        transform:translateY(-5px);
    }
`
const LinkContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
`
class FirstHeader extends Component {
    render() {
        return (
            <Row className={this.props.className}>
                <Col span={6}>
                    <Logo alt="logo" src={LogoImage} />
                </Col>
                <Col span={18}>
                    <LinkContainer >
                            <Link onClick={()=>this.props.onJumpClick(1)}>
                                Who We Are
                            </Link>
                            <Link onClick={()=>this.props.onJumpClick(2)}>
                                What We Do
                            </Link>
                            <Link onClick={()=>this.props.onJumpClick(3)}>
                                Our Projects
                            </Link>
                            <Link onClick={()=>this.props.onJumpClick(4)}>
                                Contact Us
                            </Link>
                    </LinkContainer>
                </Col>
            </Row>
        );
    }
}

export default FirstHeader;