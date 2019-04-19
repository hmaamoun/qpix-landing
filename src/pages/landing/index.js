import React from 'react'
import { Carousel } from 'antd';
import styled, { ThemeProvider } from 'styled-components';
import FirstSlide from '../../components/FirstSlide';
import SecondSlide from '../../components/SecondSlide';
import FinalSlide from '../../components/FinalSlide';
const primaryColor = '#343b48';
const yellow = '#ede125';
const green = '#73c383'
const dotColors = ['white', primaryColor, yellow, green]
const StyledCarousel = styled(Carousel)`
    .slick-list{
        height:100vh !important;
        overflow: hidden;
    }
    .slick-dots {
        right:82px;
    }
    .slick-slide {
        border:none !important;
    }
    .slick-dots li button {
        width:16px;
        height:16px;
        border-radius:16px;
        border: 2px solid ${props => props.color};
        background-color:transparent;
        opacity:1;
    }
    .slick-dots li.slick-active button {
        width:16px;
        height:16px;
        border-radius:16px;
        background-color:${props => props.color}
    }
`
const CarouselItem = styled.div`
    height:100vh;
    background:${props => props.color};
    position:relative;
`

const SlideCounter = styled.div`
    top: 50%;
    z-index:999;
    right: 0;
    width: 68px;
    border-bottom: 2px solid ${props => props.color};
    position: absolute;
    -webkit-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(${props => props.translation}%);
    color: ${props => props.color};
    font-size:24px;
    font-weight:bold;
`
export default class BlogIndexPage extends React.Component {
    state = {
        currentColor: dotColors[0]
    }
    componentDidMount() {
        this.slider.goTo(0);
        window.addEventListener('wheel', this.handleScroll);

    }
    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    }
    handleScroll = (e) => {
        let delta;
        if (e.wheelDelta) {
            delta = e.wheelDelta;
        } else {
            delta = -1 * e.deltaY;
        }
        if(Math.abs(delta) <40){
            return;
        }
        if (delta < 0) {
            this.slider.next();
        } else if (delta > 0) {
            this.slider.prev();
        }
    }
    handleJumpClick = (slideNumber) => {
        this.slider.goTo(slideNumber);
    }
    render() {
        const { currentColor } = this.state
        return (
            <ThemeProvider theme={{
                logoRed: '#ed8485',
                logoYellow: '#ece025',
                logoGreen: '#73c383',
                logoBlue: '#6786c3',
                primary: primaryColor,
                secondary: yellow,
                tertiary: green
            }}>
                <StyledCarousel beforeChange={(before, slide) => this.setState({ currentColor: dotColors[slide] })} color={currentColor} ref={slider => (this.slider = slider)} vertical>
                    <CarouselItem color={'#313846'}>
                        <SlideCounter translation={'-180'} color={dotColors[0]}>01</SlideCounter>
                        <FirstSlide onJumpClick={this.handleJumpClick} />
                    </CarouselItem>
                    <CarouselItem color={'#f6f6f6'}>
                        <SlideCounter translation={'-119'} color={dotColors[1]}>02</SlideCounter>
                        <SecondSlide />
                    </CarouselItem>
                    <CarouselItem color={'#313846'}>
                        <SlideCounter translation={'-58'}  color={dotColors[2]}>03</SlideCounter>
                    </CarouselItem>
                    <CarouselItem color={'white'}>
                        <SlideCounter translation={'2'}  color={dotColors[3]}>04</SlideCounter>
                        <FinalSlide/>
                    </CarouselItem>
                </StyledCarousel>
            </ThemeProvider>
        )
    }
}
