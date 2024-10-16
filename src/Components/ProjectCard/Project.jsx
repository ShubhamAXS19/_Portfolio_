import React from 'react';
import Social from '../../assets/img/social-app-ss.png';
import Dashboard from '../../assets/img/react-dashboard.png';
import GymApp from '../../assets/img/gym_app.png';
import Inventory from '../../assets/img/Inventory.png';

import HonestBite from '../../assets/img/HonestBite.png';
import HonestBite2 from '../../assets/img/HonestBite2.png';

import Hike1 from '../../assets/img/FindYourNextHike.png';
import Hike2 from '../../assets/img/FindYourNextHike2.png';
import Hike3 from '../../assets/img/FindYourNextHike3.png';



import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import './Project.css';

const Bite = [HonestBite, HonestBite2];
const Hike = [Hike1, Hike2, Hike3];

export const Project1 = () => {
    return (
        <a href='https://social-media-client-psi.vercel.app/'>
            <div className='project-card'>
                <img src={Social} alt="Social Media App Screenshot" />
                <h2>Social Media App</h2>
                <h3>Desc</h3>
            </div>
        </a>
    );
}

export const Project2 = () => {
    return (
        <a href='https://react-dashboard-three-mu.vercel.app/'>
            <div className='project-card'>
                <img src={Dashboard} alt="React Dashboard Screenshot" />
                <h2>React Dashboard</h2>
                <h3>Desc</h3>
            </div>
        </a>
    );
}

export const Project3 = () => {
    return (
        <a href='https://gym-app-hazel.vercel.app/'>
            <div className='project-card'>
                <img src={GymApp} alt="Gym App Screenshot" />
                <h2>Gym App</h2>
                <h3>Desc</h3>
            </div>
        </a>
    );
}

export const Project4 = () => {
    return (
        <a href='https://inventory-mgmt-fe-7hee-jn31vi7o3-shubhamaxs19s-projects.vercel.app/products'>
            <div className='project-card'>
                <img src={Inventory} alt="Inventory Management App Screenshot" />
                <h2>Inventory Management</h2>
                <h3>NextJs + Redux + Nodejs + Prisma + Postgres + AWS</h3>
            </div>
        </a>
    );
}

export const Project5 = () => {
    return (
        <a href='https://honest-bite-frontend--inky.vercel.app/'>
            <div className='project-card'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    modules={[Navigation, Pagination, Autoplay]}
                >
                    {Bite && Bite.length > 0 ? (
                        Bite.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="swiper-slide-image-container flex-center">
                                    <img
                                        src={image}
                                        alt={`Honest Bite image ${index + 1}`}
                                        className="object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (
                        <SwiperSlide>
                            <div>No images available for this project.</div>
                        </SwiperSlide>
                    )}
                </Swiper>
                <h2>Honest Bite</h2>
                <h3>ReactJs + Recoil + Nodejs + Mongo + Typegoose + AWS( EC2 + VPC + S3 ) </h3>
            </div>
        </a>
    );
}

export const Project6 = () => {
    return (
        <a href='https://find-your-next-hike-fe.vercel.app/'>
            <div className='project-card'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    modules={[Navigation, Pagination, Autoplay]}
                >
                    {Hike && Hike.length > 0 ? (
                        Hike.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className="swiper-slide-image-container flex-center">
                                    <img
                                        src={image}
                                        alt={`Honest Bite image ${index + 1}`}
                                        className="object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (
                        <SwiperSlide>
                            <div>No images available for this project.</div>
                        </SwiperSlide>
                    )}
                </Swiper>
                <h2>Find Your Next Hike</h2>
                <h3>NextJs + Recoil + Nodejs + Mongo + Typegoose + AWS( EC2 + VPC + S3 ) </h3>
            </div>
        </a>
    );
}
