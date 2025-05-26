import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Map from './components/map';
import GoogleIcon from '../img/google-icon.png';

const Footer = () => {
    return (
        <footer id="footer" className="footer" role="contentinfo">
            <div className="wrapper">
                {/* Map Section */}
                <div className="one-fourth">
                    <h2 className="widgettitle">Find Us Here</h2>
                    <a
                        className="gmw-thumbnail-map gmw-lightbox-enabled"
                        href="#gmw-dialog-googlemapswidget-2"
                        title="Click to open a larger map"
                    >
                        <Map />
                    </a>
                </div>

                {/* Location Info & Social Icons */}
                <div className="one-fourth">
                    <h2 className="widgettitle">Location</h2>
                    <address className="textwidget" style={locationText} itemScope itemType="http://schema.org/LocalBusiness">
                        <span itemProp="name">Liquors Unlimited</span>
                        <br />
                        <a
                            itemProp="address"
                            href="https://www.google.com/maps/place/3002+Market+St,+Pascagoula,+MS+39567/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa fa-map-marker" aria-hidden="true"></i> 3002 Market St, Pascagoula, MS 39567
                        </a>
                        <br />
                        <i className="fa fa-phone-square" aria-hidden="true"></i>{' '}
                        <a itemProp="telephone" href="tel:2287623874">
                            (228) 762-3874
                        </a>
                    </address>

                    <div className="socialicons">
                        <a
                            href="https://www.facebook.com/p/Liquors-Unlimited-100066869287350/"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            aria-label="Visit Liquors Unlimited on Facebook"
                            className="bottomicon"
                        >
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>

                        <a
                            href="https://www.google.com/maps/place/Liquors+Unlimited/@30.3641313,-88.5509175,17z/"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            aria-label="Find Liquors Unlimited on Google Maps"
                            className="bottomicon"
                        >
                            <img src={GoogleIcon} alt="Google Maps" width="32" height="32" />
                        </a>
                    </div>
                </div>

                {/* Business Hours */}
                <div className="one-fourth">
                    <h2 className="widgettitle">Business Hours</h2>
                    <ul className="business-hours">
                        <li>Monday: 10:00 AM – 10:00 PM</li>
                        <li>Tuesday: 10:00 AM – 10:00 PM</li>
                        <li>Wednesday: 10:00 AM – 10:00 PM</li>
                        <li>Thursday: 10:00 AM – 10:00 PM</li>
                        <li>Friday: 10:00 AM – 10:00 PM</li>
                        <li>Saturday: 10:00 AM – 10:00 PM</li>
                        <li>Sunday: Closed</li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="one-fourth">
                    <h2 className="widgettitle">Contact Us Today!</h2>
                    <div className="contact-text-wrapper">
                        <p className="textwidget">
                            Searching for something specific? Visit our store to explore our extensive collection, or let us
                            know if you need something special ordered. Stop by and discover a wide array of premium wines and top-brand spirits.
                        </p>
                        <a className="btn" href="/contact/">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>

            <div className="copy">
                © {new Date().getFullYear()} Liquors Unlimited
            </div>
        </footer>
    );
};

const locationText = {
    fontSize: '1.3rem',
    marginTop: '10%',
};

export default Footer;
