import React from 'react'
import Marquee from "react-fast-marquee";

const PartnersMarquee = () => {
    return (
        <div className="about-content-part-bottom">
            <h2>Companies, I Worked With</h2>
            <div className="company-list">
                <div className="scroller">
                    <div className="scroller__inner">
                        <Marquee>
                            <img src={"/images/client-logos/1.png"} alt="" />
                            <img src={"/images/client-logos/2.png"} alt="" />
                            <img src={"/images/client-logos/3.png"} alt="" />
                            <img src={"/images/client-logos/4.png"} alt="" />
                            <img src={"/images/client-logos/5.png"} alt="" />
                            <img src={"/images/client-logos/1.png"} alt="" />
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PartnersMarquee