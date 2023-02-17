import React from 'react'
import Social from '../../assets/img/social-app-ss.png'
import Dashboard from '../../assets/img/react-dashboard.png'
import GymApp from '../../assets/img/gym_app.png'
import './Project.css'

export const Project1 = () => {
    return (
        <a href='https://social-media-client-psi.vercel.app/'>
            <div className='project-card'>
                <img src={Social} alt="" />
                <h2>Social Media App</h2>
                <h3>Desc</h3>

            </div>
        </a>
    )
}


export const Project2 = () => {
    return (
        <a href='https://react-dashboard-three-mu.vercel.app/'>
            <div className='project-card'>
                <img src={Dashboard} alt="" />
                <h2>React Dashboard</h2>
                <h3>Desc</h3>

            </div>
        </a>
    )
}


export const Project3 = () => {
    return (
        <a href='https://gym-app-hazel.vercel.app/'>
            <div className='project-card'>
                <img src={GymApp} alt="" />
                <h2>Gym App</h2>
                <h3>Desc</h3>

            </div>
        </a>
    )
}

