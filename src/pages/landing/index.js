import React from 'react'
import { Carousel } from 'antd';
import styled from 'styled-components';
const primaryColor = '#343b48'
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
    }
    .slick-dots li.slick-active button {
        width:16px;
        height:16px;
        border-radius:16px;
    }
`
const CarouselItem = styled.div`
    height:100vh;
`
export default class BlogIndexPage extends React.Component {
    render() {
        console.log(Carousel)
        return (
            <div>

                <StyledCarousel ref={slider => (this.slider = slider)} vertical>
                    <CarouselItem><h3><input
                        onChange={e => this.slider.goTo(e.target.value)}
                        type="range"
                        min={0}
                        max={3}
                    /></h3></CarouselItem>
                    <CarouselItem><h3>2</h3></CarouselItem>
                    <CarouselItem><h3>3</h3></CarouselItem>
                    <CarouselItem><h3>4</h3></CarouselItem>
                </StyledCarousel>
            </div>
        )
    }
}
