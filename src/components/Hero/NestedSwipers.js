import React from 'react'
import Swiper from 'react-id-swiper';
import HomeSwipe from './HomeSwipe'
import SkillSwipe from './SkillSwipe'
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
                <HomeSwipe />
            </section>
            <section>
                <Swiper {...VerticalSwiperParams}>
                    <section>
                        <SkillSwipe icon={<TiHtml5 />} title="Html" />
                    </section>
                    <section>
                        <SkillSwipe icon={<FaCss3Alt />} title="CSS" />
                    </section>
                    <section>
                        <SkillSwipe icon={<FaReact />} title="React" />
                    </section>
                </Swiper>
            </section>
        </Swiper>
    )
}

export default NestedSwipers
