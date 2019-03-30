import React, { Component } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import LogoImage from '../assets/img/qpix-logo.png'
const Logo = styled.img`
    height:50px;
`
class FirstHeader extends Component {
    render() {
        return (
            <Row className={this.props.className}>
                <Col span={6}>
                    <Logo alt="logo" src={LogoImage} />
                </Col>
                <Col span={18}>
                    <h1 style={{ textAlign: 'right', color: 'white' }}>
                        Header Links
                                </h1>
                </Col>
            </Row>
        );
    }
}

export default FirstHeader;