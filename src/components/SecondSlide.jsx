import React, { PureComponent } from 'react';
import styled from 'styled-components'
import { Row, Col, Card } from 'antd';
import FirstImage from '../assets/img/shape1.svg'
import W3C from '../assets/img/w-3-c.svg'
import Forma1 from '../assets/img/forma-1.svg'

const Container = styled.div`
    padding: 0 80px;
    height:100%;
    position: relative;
    .ant-card-meta-description{
        font-size:20px;
    }
`

const LeftContainer = styled.div`
    display:flex;
    background:white;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding:0px 20px;
    height: 100vh;
`
const RightContainer = styled.div`
    display:flex;
    background:transparent;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align:left;
    padding-left:15%;
    padding-right:15%;
`
const IconImage = styled.img`
    width:80px !important;
    margin:auto;
`
const Title = styled.h1`
    font-size: 48px;
    font-weight:bold;
    color:${props=>props.theme.primaryColor};
    margin-bottom:24px;
    width:100%;
`
const ThinTitle = styled.h1`
    font-size: 36px;
    font-weight:normal;
    color:${props=>props.theme.primaryColor};
    margin-bottom:24px;
    width:100%;
`
const Text = styled.p`
    font-size: 22px;
    color: rgba(50, 57, 69, 0.6);
    width:100%;
`
class SecondSlide extends PureComponent {
    render() {
        return (
            <Container>
            <Row>
                <Col sm={8} xl={6}>
                    <LeftContainer>
                        <Card
                            bordered={false}
                            style={{ width: '100%' }}
                            cover={<IconImage alt="example" src={FirstImage} />}
                        >
                            <Card.Meta
                                description="Pixel Perfect, Clean And 
                                Minimal Website Designs 
                                At Afforable Price
                                "
                            />
                        </Card>
                        <Card
                            bordered={false}
                            style={{ width: '100%' }}
                            cover={<IconImage alt="example" src={W3C} />}
                        >
                            <Card.Meta
                                description="Clean, W3C Valid And 
                                Responsive Front-End
                                Coding In Quick Time"
                            />
                        </Card>
                        <Card
                            bordered={false}
                            style={{ width: '100%' }}
                            cover={<IconImage alt="example" src={Forma1} />}
                        >
                            <Card.Meta
                                description="Refreshing, Creative And
                                Awesome Developments
                                With Lots Of Features"
                            />
                        </Card>
                    </LeftContainer>
                </Col>
                <Col sm={16} xl={18}>
                    <RightContainer>
                        <Title>Who We Are</Title>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                        <Text>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Text>
                        <Text>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </Text>
                        <ThinTitle>Custom Tailored Solutions</ThinTitle>
                        <Text>
                            Create, develope and deploy your custom tailred solution. Either we will integrate one of our products or we will develop a new solution based on your requirments. 
                        </Text>
                        <Text>
                            We are experienced in this thing, since a lot. 
                        </Text>
                        <Text>
                            We have very talented Engineers, who can transform your requirments to a very creative platform.
                        </Text>
                    </RightContainer>
                </Col>
            </Row>
            </Container>
        );
    }
}

export default SecondSlide;