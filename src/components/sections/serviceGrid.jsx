import React from 'react'
import { RiApps2Fill, RiGlobalFill, RiPantoneFill, RiQuillPenLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const ServiceGrid = () => {
    return (
        <section id="services" className="services-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>Services</p>
                                    <h2>Quality Services</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="row">
                        <Card id={1} icon={<RiGlobalFill size={60} />} title={"Web Development"} description={"I craft fast, interactive, and scalable websites using React and Next.js—bringing creativity to code with smooth animations and a focus on user experience. Whether it's a landing page or a full-scale platform, your vision becomes reality on the web."} />
                        <Card id={2} icon={<RiApps2Fill size={60} />} title={"App Development"} description={"Using Flutter, I build high-performance mobile applications that run seamlessly on both iOS and Android. From sleek UIs to complex functionality, I deliver apps that feel native, look modern, and grow with your users."} />
                        <Card id={3} icon={<RiPantoneFill size={60} />} title={"Poster Design"} description={"With Canva and creative direction, I design striking posters, banners, and digital visuals that resonate. Perfect for events, social media, or branding—every design is tailored to captivate and convert. So, let's start the creativity."} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid

const Card = ({ icon, title, description, id }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item">
                    {icon}
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </SlideUp>
        </div>
    )
}