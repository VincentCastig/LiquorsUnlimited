import React from 'react';
import { Col } from 'react-bootstrap';
import ContactForm from '../contact-form';

const Contact = () => {
    return (
        <div className="container-home">
            <div className='content-wrapper'>
                <div className="home-wine-container">
                
                    <div className="home-content">
                    <h1>Get in Touch with Liquors Unlimited</h1>
                        <p>
                            At Liquors Unlimited, we pride ourselves on offering an extensive selection of wines and spirits, along with exceptional customer service. Whether you're planning a special event, need advice on the perfect bottle, or just have a question, we're here to help. Feel free to reach out to us with any inquiries or feedback—your satisfaction is our top priority. Our knowledgeable team is ready to assist you with personalized recommendations and ensure you have a great shopping experience.
                        </p>

                        <p>
                            Conveniently located in the heart of Pascagoula, Liquors Unlimited is your go-to destination for all your beverage needs. We welcome you to visit our store and explore our wide range of products. If you can't make it in person, don't hesitate to give us a call or send us a message through the form below. We’re always happy to help you find exactly what you’re looking for. Thank you for choosing Liquors Unlimited—where quality meets convenience!
                        </p>
                        <div className='contact-form-wrapper'>
                            <Col xs={12} md={12} lg={6}>
                                <ContactForm />
                            </Col>
                            <Col xs={12} md={12} lg={6}>
                                <img className="contact-main-image" src={(require('../../img/painting.JPG'))} alt="Side view of Liquors Unlimited Store" />
                            </Col>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;