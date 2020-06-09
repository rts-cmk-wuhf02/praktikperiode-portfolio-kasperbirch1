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
            <section style={{ backgroundImage: 'url("https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <article>
                    <h2>Hej</h2>
                </article>
            </section>
            <section style={{ backgroundImage: 'url("https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <Swiper {...VerticalSwiperParams}>
                    <section>
                        <article>
                            <h2>Hej</h2>
                        </article>
                    </section>
                    <section>
                        <article>
                            <img style={{ width: '100%' }} src={placeholder} alt="test" />
                            <h2>Hej</h2>
                        </article>
                    </section>
                    <section>
                        <article>
                            <img style={{ width: '100%' }} src={placeholder} alt="test" />
                            <h2>Hej</h2>
                        </article>
                    </section>
                    <section>
                        <article>
                            <h2>Hej</h2>
                            <img style={{ width: '100%' }} src={placeholder} alt="test" />
                        </article>
                    </section>
                </Swiper>
            </section>
        </Swiper>
    )
}

export default NestedSwipers
