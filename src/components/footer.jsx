import React from 'react'
import '../styles/components/footer.scss';

function Footer() {
    const date = new Date();
  return (
    <>
          <div className="footer">
                <div className="footer__top">
                    <div className="footer__top__about">
                        <p className="footer__top__about__logo">GoNow</p>
                        <p className="footer__top__about__description">In vestibulum mi vel orci fermentum, a mollis elit dictum. 
                        Aenean iaculis, tortor varius efficitur pulvina</p>
                    </div>
                    <div className="footer__top__options-one">
                        <p>Resources</p>
                        <p>FAQ</p>
                        <p>For Business</p>
                    </div>
                    <div className="footer__top__options-two">
                        <p>Company</p>
                        <p>Careers</p>
                        <p>Blog</p>
                    </div>
                    <div className="footer__top__options-three">
                        <div className="footer__top__options-three__contact">
                            <div className="footer__top__options-three__contact__footer-email">
                                <img className="footer-email__icon" src="./images/mail.svg"/>
                                <p>info@gonow.com</p>
                            </div>
                            <div className="footer__top__options-three__contact__footer-contact">
                                <img className="footer-contact__icon" src="./images/phone-call.svg"/>
                                <p>0810 0000 000</p>
                            </div>
                        </div>
                        <div className="footer__top__options-three__socials">
                            <p className="footer__top__options-three__socials__text">Follow us</p>
                            <div className="footer__top__options-three__socials__handles">
                                <div className="footer__top__options-three__socials__handles__main">
                                    <img className="footer__top__options-three__socials__handles__main__icons" src="./images/facedbook.svg"/>
                                    <img className="footer__top__options-three__socials__handles__main__icons" src="./images/instagram.svg"/>
                                    <img className="footer__top__options-three__socials__handles__main__icons" src="./images/linkedin.svg"/>
                                    <img className="footer__top__options-three__socials__handles__main__icons" src="./images/twitter.svg"/>
                                </div>
                                <div className="footer__top__options-three__socials__handles__main1">
                                    <img className="footer__top__options-three__socials__handles__main1__icon" src="./images/facedbook-two.svg"/>
                                    <img className="footer__top__options-three__socials__handles__main1__icon" src="./images/instagram-two.svg"/>
                                    <img className="footer__top__options-three__socials__handles__main1__icon" src="./images/linkedin-two.svg"/>
                                    <img className="footer__top__options-three__socials__handles__main1__icon" src="./images/twitter-two.svg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="copyright">Copyright © {date.getFullYear()} gonow</p>
            </div>
    </>
  )
}

export default Footer
