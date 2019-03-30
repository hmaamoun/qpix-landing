import React, { PureComponent } from 'react';
import HeaderColors from './HeaderColors';
import styled from 'styled-components'
import FirstHeader from './FirstHeader';
import { Row, Col } from 'antd';
import Button from '../elements/Button';
const Header = styled(FirstHeader)`
    margin-bottom:167px;
`
const Container = styled.div`
    padding: 45px 65px;
    height:100%;
`
const Text = styled.h1`
    text-align:left;
    color:white;
    margin-bottom:14px;
`
const Line1 = styled(Text)`
    font-size:36px;
    line-height:36px;
`
const Line2 = styled(Text)`
    font-size:48px;
    line-height:48px;
    font-weight:bold;
`
const Line3 = styled(Text)`
    font-size:48px;
    line-height:48px;
    font-weight:900;
    color:${props => props.theme.logoYellow};
`
const Description = styled(Text)`
    font-size:22px;
    max-width:640px;
`
class FirstSlide extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <HeaderColors />
                <Container >
                    <Header />
                    <Row>
                        <Col span={16}>

                            <Line1>
                                YOUR ONE STOP
                    </Line1>
                            <Line2>
                                SHOP DIGITAL SOLUTIONS
                    </Line2>
                            <Line3>
                                PROVIDER!
                    </Line3>
                            <Description>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm od tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim addw minim veniam, quis nostrud.
                    </Description>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <Button float={'left'} type="primary">
                                Start a Project
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default FirstSlide;