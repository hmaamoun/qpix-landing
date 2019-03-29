import React from 'react'
import { Carousel } from 'antd';
import styled from 'styled-components';
const primaryColor = '#343b48';
const yellow = '#ede125';
const green = '#73c383'
const dotColors = ['white', primaryColor, yellow, green]
const StyledCarousel = styled(Carousel)`
    .slick-list{
        height:100vh;
        overflow: hidden;
    }
    .slick-dots {
        right:68px;
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
    handleScroll = (e)=>{
        let delta;
        if (e.wheelDelta){
            delta = e.wheelDelta;
        }else{
            delta = -1 * e.deltaY;
        }

        if (delta < 0){
            this.slider.next();
        }else if (delta > 0){
            this.slider.prev();
        }
    }
    render() {
        const { currentColor } = this.state
        return (
            <div onScroll={(x) => console.log(x)}>
                <StyledCarousel afterChange={(slide) => this.setState({ currentColor: dotColors[slide] })} color={currentColor} ref={slider => (this.slider = slider)} vertical>
                    <CarouselItem color={'#313846'}><h3><input
                        onChange={e => this.slider.goTo(e.target.value)}
                        type="range"
                        min={0}
                        max={3}
                    /></h3></CarouselItem>
                    <CarouselItem color={'white'}><h3>2</h3></CarouselItem>
                    <CarouselItem color={'#313846'}><h3>3</h3></CarouselItem>
                    <CarouselItem color={'white'}><h3>4</h3></CarouselItem>
                </StyledCarousel>
            </div>
        )
    }
}
