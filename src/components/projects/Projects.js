import "./projects.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow,Navigation,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";
import four from "./assets/4.png";
import five from "./assets/5.png";
import six from "./assets/6.png";
import seven from "./assets/7.png";
import pOne from "./assets/p-one.png"
import pTwo from "./assets/p-two.png"
import pThree from "./assets/p3.png"

export default function Projects(){
    return(
        <div className="projects-container" id="projects">
                <section className="projects">
                    <div className="project-one">
                        <h1>LEGO CLONE WEBSITE</h1>
                        <Swiper
                            freeMode={true}
                            modules={[EffectCoverflow,Navigation,Pagination]}
                            navigation={true}
                            effect="coverflow"
                            className="featured-sets-slider"
                            slidesPerView={1}
                            pagination={true}
                            breakpoints={{
                                900:{
                                    slidesPerView:3
                                }
                                
                            }}
                        >
        
                            <SwiperSlide className="fakeSlide"></SwiperSlide>
                            <SwiperSlide className="oneSlide"><img alt="project-example" style={{width:"100%"}} src={one}/></SwiperSlide>
                            <SwiperSlide className="oneSlide"><img alt="project-example" style={{width:"100%"}} src={two}/></SwiperSlide>
                            <SwiperSlide className="oneSlide"><img alt="project-example" style={{width:"100%"}} src={three}/></SwiperSlide>
                            <SwiperSlide className="oneSlide"><img alt="project-example" style={{width:"100%"}} src={four}/></SwiperSlide>
                            <SwiperSlide className="oneSlide"><img alt="project-example" style={{width:"100%"}} src={five}/></SwiperSlide>
                            <SwiperSlide className="oneSlide"><img alt="project-example" style={{width:"100%"}} src={six}/></SwiperSlide>
                            <SwiperSlide className="oneSlide"><img alt="project-example" style={{width:"100%"}} src={seven}/></SwiperSlide>
                            <SwiperSlide className="fakeSlide"></SwiperSlide>
                        </Swiper>
                        <p>
                            The goal of this team project is creating a fully functional e-commerce site. 
                            You can create account, login, purchase a product.
                        </p>
                        <p>
                            Some of the technologies used in the project are: React.js, Sass, Node.js, MongoDB
                        </p>
                        <a href="https://github.com/Develhope-FS-INT-6-Team2/lego-react">Click here to visit github repo</a>
                    </div>
                    <div className="project-two">
                        <h1>CRYPTO TRACKER</h1>
                            <Swiper
                                freeMode={true}
                                modules={[EffectCoverflow,Navigation,Pagination]}
                                navigation={true}
                                effect="coverflow"
                                className="featured-sets-slider"
                                slidesPerView={1}
                                pagination={true}
                                breakpoints={{
                                    900:{
                                        slidesPerView:3
                                    }
                                    
                                }}
                            >
            
                                <SwiperSlide className="fakeSlide"></SwiperSlide>
                                <SwiperSlide className="oneSlide"><img alt="project-example" style={{width:"100%"}} src={pOne}/></SwiperSlide>
                                <SwiperSlide className="oneSlide"><img alt="project-example" style={{width:"100%"}} src={pTwo}/></SwiperSlide>
                                <SwiperSlide className="oneSlide"><img alt="project-example" style={{width:"30%"}} src={pThree}/></SwiperSlide>
                                <SwiperSlide className="fakeSlide"></SwiperSlide>
                            </Swiper>
                            <p>
                                This is a personal project to track crypto currency situations at the moment. Using coingecko's free api to get the data.
                            </p>
                            <p>
                                Some of the technologies used in the project are: Typescript, React.js, Sass
                            </p>
                            <a href="https://stellar-pika-60a04f.netlify.app">Click here to visit the website</a>
                            <a href="https://github.com/NurettinDemirhan/nuri-crypto">Click here to visit github repo</a>
                    </div>
                </section>
        </div>
    )
}