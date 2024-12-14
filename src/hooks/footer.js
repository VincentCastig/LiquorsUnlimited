import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Map from './components/map';
import GoogleIcon from '../img/google-icon.png'; // Adjust the path according to your folder structure
import RipVan from '../img/event-images/rip-van-winkle.jpeg';
import RipVanReserve from '../img/event-images/van-winkle-special-reserve.jpg';
import OldForester from '../img/event-images/old-forester.jpg';



const Footer = () => {
    return (
        <footer id="footer" className="footer" role="contentinfo">

            <h2 className='auction-header'>Liquors Unlimited Reverse Auction</h2>

            <section class="auction-images">
                <div class="event-image-container">
                    <img src={RipVan} alt="10-year-old Rip Van Winkle" />
                    <p>10-Year-Old Rip Van Winkle</p>
                </div>
                <div class="event-image-container">
                    <img src={RipVanReserve} alt="12-year-old Van Winkle Special Reserve" />
                    <p>12-Year-Old Van Winkle Special Reserve</p>
                </div>
                <div class="event-image-container">
                    <img src={OldForester} alt="Old Forester Birthday Bourbon" />
                    <p>Old Forester Birthday Bourbon</p>
                </div>
            </section>
            <section class="auction-info">
                <p>Liquors Unlimited is blessed with more good customers who like rare bourbons than available rare bourbons. This Christmas, we have for sale only 2 bottles of 10-year-old Rip Van Winkle and 1 bottle of 12-year-old Van Winkle Special Reserve. We’d rather not pick one of you over the other, so we’ll let the market decide by having a Reverse Auction.</p>
                <p>The Auction will start at 3:00 pm December 19 and we will lower the price on each bottle every hour, while the store is open, until each bottle sells. When they are gone, that’s all till next year.</p>
                <p>Internet liquor stores offer the 12-year-old for $1,799 per bottle & 10-year-old for $1,299. We aren’t an internet store. We’re Liquors Unlimited Discount Package Store.</p>
                <p>We will discount the internet prices by 50% as our starting prices. The 12-year-old will start at $899.55 (dropping $40 per hour) and the 10-year-old will start at $644.55 and drop $30 per hour until each is sold.</p>
                <p>Come to the Store or Call <strong>762-3874</strong> to bid/purchase.</p>
            </section>
            <div className="wrapper">
                <div className="one-fourth">
                    <div id="googlemapswidget-2">
                        <h2 className="widgettitle">Find Us Here</h2>
                        <div>
                            <a
                                data-gmw-id="googlemapswidget-2"
                                className="gmw-thumbnail-map gmw-lightbox-enabled"
                                href="#gmw-dialog-googlemapswidget-2"
                                title="Click to open a larger map"
                            >
                                <Map />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="one-fourth">
                    <div id="text-2">
                        <h2 className="widgettitle">Location</h2>
                        <div className="textwidget" style={locationText}>
                            <div itemScope itemType="http://schema.org/LocalBusiness">
                                <span itemProp="name">Liquors Unlimited</span>
                                <br />
                                <span itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                                    <a
                                        itemProp="streetAddress"
                                        href="https://www.google.com/maps/place/3002+Market+St,+Pascagoula,+MS+39567/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa fa-map-marker" aria-hidden="true"></i> 3002 Market St
                                        <br />
                                        Pascagoula, MS 39567
                                    </a>
                                </span>
                                <br />
                                <span>
                                    <i className="fa fa-phone-square" aria-hidden="true"></i>{' '}
                                    <a itemProp="telephone" href="tel:6622343331">
                                        (228) 762-3874
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div id="">
                        <div className="socialicons">
                            <div className="bottomicon">
                                <a
                                    href="https://www.facebook.com/p/Liquors-Unlimited-100066869287350/"
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                    aria-label="Visit Liquors Unlimited on Facebook"
                                >
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                            </div>

                            <div className="bottomicon">
                                <a
                                    href="https://www.google.com/maps/place/Liquors+Unlimited/@30.3641313,-88.5509175,17z/data=!3m1!4b1!4m6!3m5!1s0x889be8c8caf3c843:0x8ab0c06d01c57717!8m2!3d30.3641313!4d-88.5483372!16s%2Fg%2F1tkp0kny?hl=en&entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                >
                                    <img src={GoogleIcon} alt="Google Icon" width="32" height="32" />

                                </a>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="one-fourth">
                    <div className="business-hours">
                        <h2>Business Hours</h2>
                        <ul>
                            <li>Monday: 10:00 AM - 10:00 PM</li>
                            <li>Tuesday: 10:00 AM - 10:00 PM</li>
                            <li>Wednesday: 10:00 AM - 10:00 PM</li>
                            <li>Thursday: 10:00 AM - 10:00 PM</li>
                            <li>Friday: 10:00 AM - 10:00 PM</li>
                            <li>Saturday: 10:00 AM - 10:00 PM</li>
                            <li>Sunday: Closed</li>
                        </ul>
                        <strong></strong>
                    </div>

                </div>
                <div className="one-fourth">
                    <h2 className="widgettitle">Contact Us Today!</h2>
                    <div className="contact-text-wrapper">
                        <div className="textwidget">
                            Searching for something specific? Visit our store to explore our extensive collection, or let us know if you need something special ordered. Stop by our well-stocked liquor store and discover a wide array of premium wines and top-brand spirits.
                        </div>
                        <a className="btn" href="/contact/">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>

            <div className="copy">
                © {new Date(Date.now()).getFullYear()} Liquors Unlimited
            </div>
        </footer>
    )
}

const locationText = {
    fontSize: '1.3rem',
    marginTop: '10%'
}


export default Footer;