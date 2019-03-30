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
    position: relative;
`
const Text = styled.h1`
    text-align:left;
    color:white;
    margin-bottom:0px;
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
const SlideBackground = styled.img`
    object-fit: cover;
    object-position:top;
    height: 100vh;
    width:100%;
`
const BackgroundWrapper = styled.div`
    height: 100vh;
    width: 100%;
    position: absolute;
    &:before{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(43, 51, 66, 0.96);
        transition: all .3s linear;
    }
`
const SlideCounter = styled.div`
    top: 50%;
    right: 0;
    width: 77px;
    border-bottom: 2px solid white;
    position: absolute;
    -webkit-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-187%);
    color: white;
    font-size:24px;
`
class FirstSlide extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <HeaderColors />

                <BackgroundWrapper>
                    <SlideBackground src={'https://images.pexels.com/photos/1432942/pexels-photo-1432942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} />
                </BackgroundWrapper>
                <Container >
                    <Header />
                    <SlideCounter>
                        01
                </SlideCounter>
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
                            <Button margin={'12px 0'} float={'left'} type="primary">
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