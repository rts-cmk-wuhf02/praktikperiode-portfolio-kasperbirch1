import React from 'react'
import Swiper from 'react-id-swiper';

import 'swiper/css/swiper.css';
import '../Hero/NestedSwipers.css';

const NestedSwipers = () => {
    const HorizontalSwiperParams = {
        pagination: {
            el: '.swiper-pagination.swiper-pagination-h',
            clickable: true
        }
    };
    const VerticalSwiperParams = {
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination.swiper-pagination-v',
            clickable: true
        }
    };
    return (
        <Swiper {...HorizontalSwiperParams}>
            <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In a ullam aspernatur sed ratione rerum animi neque. Culpa et excepturi architecto eveniet velit magni odio esse ut iste recusandae libero aliquam quibusdam aliquid a, similique, dolor labore voluptates. Facere provident quas voluptatibus molestiae harum dignissimos corrupti debitis, qui doloremque ad.</div>
            <div>
                <Swiper {...VerticalSwiperParams}>
                    <div>Vertical #1</div>
                    <div>Vertical #2</div>
                    <div>Vertical #3</div>
                    <div>Vertical #4</div>
                </Swiper>
            </div>
            <div>Horizontal #2</div>
            <div>Horizontal #3</div>
            <div>Horizontal #4</div>
        </Swiper>
    )
}

export default NestedSwipers
