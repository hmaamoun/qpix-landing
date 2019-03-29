import React from 'react'
import { Carousel } from 'antd';
import styled from 'styled-components';
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
        right:68px;
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

        if (delta < 0) {
            this.slider.next();
        } else if (delta > 0) {
            this.slider.prev();
        }
    }
    render() {
        const { currentColor } = this.state
        return (
            <div>
                <StyledCarousel beforeChange={(before,slide) => this.setState({ currentColor: dotColors[slide] })} color={currentColor} ref={slider => (this.slider = slider)} vertical>
                    <CarouselItem color={'#313846'}></CarouselItem>
                    <CarouselItem color={'white'}></CarouselItem>
                    <CarouselItem color={'#313846'}></CarouselItem>
                    <CarouselItem color={'white'}></CarouselItem>
                </StyledCarousel>
            </div>
        )
    }
}
