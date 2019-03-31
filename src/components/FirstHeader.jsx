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
    line-height:50px;
    transform:translateY(0px);
    display:block;
    &:hover{
        transform:translateY(-5px);
    }
`
class FirstHeader extends Component {
    render() {
        return (
            <Row className={this.props.className}>
                <Col span={6}>
                    <Logo alt="logo" src={LogoImage} />
                </Col>
                <Col span={18}>
                    <Row type="flex" justify="end">
                        <Col span={3}>
                            <Link onClick={()=>this.props.onJumpClick(1)}>
                                Who We Are
                            </Link>
                        </Col>
                        <Col span={3}>
                            <Link onClick={()=>this.props.onJumpClick(2)}>
                                What We Do
                            </Link>
                        </Col>
                        <Col span={3}>
                            <Link onClick={()=>this.props.onJumpClick(3)}>
                                Our Projects
                            </Link>
                        </Col>
                        <Col span={3}>
                            <Link onClick={()=>this.props.onJumpClick(4)}>
                                Contact Us
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default FirstHeader;