import { RiMailLine, RiMapPinLine, RiPhoneLine, RiWhatsappLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../../utlits/animations/slideUp'

const ContactOption = () => {
    return (
        <div className="col-lg-4">
            <SlideUp>
                <div className="contact-content-part">
                    <SlideUp delay={2}>
                        <div className="single-contact">
                            <div className="contact-icon">
                                <i> <RiMapPinLine size={20} /></i>
                            </div>
                            <h2>My office:</h2>
                            <p>Model Town, Lahore Pakistan</p>
                        </div>
                    </SlideUp>
                    <SlideUp delay={3}>
                        <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
                            <div className="contact-icon">
                                <i> <RiPhoneLine size={20} /></i>
                            </div>
                            <h2>contact number:</h2>
                            <p>+92 316 724 5202</p>
                            
                        </div>
                    </SlideUp>
                    <SlideUp delay={3}>
                        <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
                            <div className="contact-icon">
                                <i> <RiWhatsappLine size={20} /></i>
                            </div>
                            <h2>whatsapp number:</h2>
                            <p>PK - +92 316 724 5202</p>
                            <p>BH - +973 3503 2457</p>
                        </div>
                    </SlideUp>
                    <SlideUp delay={4}>
                        <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                            <div className="contact-icon">
                                <i> <RiMailLine size={20} /></i>
                            </div>
                            <h2>Email us:</h2>
                            <p>themister.muneeb@gmail.com</p>
                        </div>
                    </SlideUp>
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactOption