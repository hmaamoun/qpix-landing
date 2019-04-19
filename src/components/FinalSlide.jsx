import React, { PureComponent } from 'react';
import styled from 'styled-components'

const Footer = styled.div`
    width:100%;
    color:white;
    font-weight:bold;
    font-size: 16px;
    height: 70px;
    line-height:68px;
    text-align:center;
    position:absolute;
    background:${props=>props.theme.primary};
    bottom: -6px;
}`
const Container = styled.div`
    position:relative;
    padding-bottom:68px;
    height:100%;
`
class FinalSlide extends PureComponent {
    render() {
        return (
                <Container >
                    <Footer>
                        All copyrights Reserved Ⓒ qpix 2018, Powered By Anspire
                    </Footer>
                </Container>
        );
    }
}

export default FinalSlide;