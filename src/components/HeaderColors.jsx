import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import styled, { withTheme } from 'styled-components';
const ColoredStrip = styled.div`
    width:100%;
    height:3px;
    background-color:${props => props.color}
`
class HeaderColors extends PureComponent {
    render() {
        const { theme } = this.props
        return (
            <Row>
                <Col span={6}>
                    <ColoredStrip color={theme.logoRed} />
                </Col>
                <Col span={6}>
                    <ColoredStrip color={theme.logoYellow} />
                </Col>
                <Col span={6}>
                    <ColoredStrip color={theme.logoGreen} />
                </Col>
                <Col span={6}>
                    <ColoredStrip color={theme.logoBlue} />
                </Col>
            </Row>
        );
    }
}

export default withTheme(HeaderColors);