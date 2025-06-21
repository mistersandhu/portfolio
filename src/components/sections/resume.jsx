import React from 'react';
import { RiBookLine, RiFlutterFill, RiMagicFill, RiReactjsFill } from '@remixicon/react';
import SlideUp from '@/utlits/animations/slideUp';

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Skills</h2>
                                <div className="experience-list">
                                    <Card Icon={RiFlutterFill} year={'2024 - Present'} title={'App Development'} institution={'Freelance Projects'} />
                                    <Card Icon={RiReactjsFill} year={'2023 - Present'} title={'Web Developement'} institution={'Company Projects'} />
                                    <Card Icon={RiMagicFill} year={'2023 - Present'} title={'Canva Designs'} institution={'Clients Projects'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card Icon={RiBookLine} year={'2024 - 2024'} title={'Diploma of System design & structure.'} institution={'PUC IT'} />
                                    <Card Icon={RiBookLine} year={'2022 - 2024'} title={'Inter of Computer Science'} institution={'Kips College'} />
                                    <Card Icon={RiBookLine} year={'2020 - 2022'} title={'Matric in Computer Science'} institution={'City School'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;

const Card = ({ year, title, institution, Icon }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <span><Icon /></span>
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                </div>
            </div>
        </SlideUp>
    );
};