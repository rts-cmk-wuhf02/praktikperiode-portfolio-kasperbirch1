import React from 'react'
import Swiper from 'react-id-swiper';
import placeholder from '../../images/gatsby-astronaut.png'

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
            <div>
                <img style={{ width: '100%' }} src={placeholder} alt="test" />
            </div>
            <div>
                <Swiper {...VerticalSwiperParams}>
                    <div>
                        <img style={{ width: '100%' }} src={placeholder} alt="test" />
                    </div>
                    <div>
                        <img style={{ width: '100%' }} src={placeholder} alt="test" />
                    </div>
                    <div>
                        <img style={{ width: '100%' }} src={placeholder} alt="test" />
                    </div>
                    <div>
                        <img style={{ width: '100%' }} src={placeholder} alt="test" />
                    </div>
                </Swiper>
            </div>
            <div>
                <img style={{ width: '100%' }} src={placeholder} alt="test" />
            </div>
            <div>
                <img style={{ width: '100%' }} src={placeholder} alt="test" />
            </div>
            <div>
                <img style={{ width: '100%' }} src={placeholder} alt="test" />
            </div>
        </Swiper>
    )
}

export default NestedSwipers
