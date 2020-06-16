import React from 'react'
import Swiper from 'react-id-swiper';
import HomeSwipe from './HomeSwipe'
import StyledSwipeIcon from './StyledSwipeIcon'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { GrGatsbyjs } from 'react-icons/gr'
import 'swiper/css/swiper.css';
import '../Hero/NestedSwipers.css';

const NestedSwipers = ({ currentHeight }) => {
    console.log("currentHeight", currentHeight);

    const VerticalSwiperParams = {
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination.swiper-pagination-v',
            clickable: true
        }
    };
    return (
        <Swiper>
            <section>
                <HomeSwipe />
            </section>
            <section>
                <Swiper {...VerticalSwiperParams}>
                    <section>
                        <StyledSwipeIcon icon={<FaHtml5 />} title="HTML" color="#e44d26" />
                        <StyledSwipeIcon icon={<FaCss3Alt />} title="CSS" color="#264de4" />
                        <StyledSwipeIcon icon={<FaJs />} title="JS" color="#ffde25" />
                    </section>
                    <section>
                        <StyledSwipeIcon icon={<FaReact />} title="React" color="#61dafb" />
                    </section>
                    <section>
                        <StyledSwipeIcon icon={<GrGatsbyjs />} title="Gatsby" color="#663399" />
                    </section>
                </Swiper>
            </section>
        </Swiper>
    )
}

export default NestedSwipers
