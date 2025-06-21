import React from 'react'
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/images/about/profile.png"} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    I’m Muneeb Sandhu, a Frontend Developer.
                                </h2>
                                <p>I am a Pakistan-based Frontend Web & App Developer with a passion for creativity, scalability, and visual development. With years of hands-on experience, I have honed my ability to build responsive, high-performance digital solutions that not only look stunning but also perform seamlessly across all devices and platforms.</p>
                                <p>Throughout my career, I have worked across a wide variety of industries and fields, including e-commerce, hospitality, finance, and education, which has given me a deep understanding of different business needs and user expectations. This diverse experience has helped me develop a holistic approach to development, combining both technical expertise and creative design thinking to deliver web and app solutions that are both functional and aesthetically pleasing.</p>
                                <div className="hero-btns">
                                    <a href="contact.html" className="theme-btn">Get In touch<i> <RiMailSendLine size={16} /> </i></a>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery