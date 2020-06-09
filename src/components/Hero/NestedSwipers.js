import React from 'react'
import Swiper from 'react-id-swiper';
import placeholder from '../../images/gatsby-astronaut.png'
import { TiHtml5 } from 'react-icons/ti'
import { FaCss3Alt, FaReact } from 'react-icons/fa'

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
            <section>
                <article style={{ padding: '2rem' }}>
                    <h2>Kasper Birch</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima non perspiciatis sequi, amet facere quisquam quos deserunt ducimus, voluptates magni! Nesciunt unde atque totam quasi quas nisi adipisci rem?</p>
                </article>
            </section>
            <section>
                <Swiper {...VerticalSwiperParams}>
                    <section>
                        <article>
                            <TiHtml5 />
                            <h2>Html</h2>
                        </article>
                    </section>
                    <section>
                        <article>
                            <FaCss3Alt />
                            <h2>CSS</h2>
                        </article>
                    </section>
                    <section>
                        <article>
                            <FaReact />
                            <h2>React</h2>
                        </article>
                    </section>
                </Swiper>
            </section>
        </Swiper>
    )
}

export default NestedSwipers
