import React from "react";
import "../styles/pages/HomePage.scss";
import { useNavigate } from "react-router";
import Footer from "../components/footer";
import InputTwo from "../components/Inputtwo";
/*import Header from "../components/Header/Header";*/

function Homepage(){
    const date = new Date();
    const route = useNavigate();

    return(
        <div className="Home-page">
          <div className="Home-page__container">
            {/*<Header/>*/}
            <div className="top">
                <p className="top__logo">GoNow</p>
                <div className="top__navbar">
                    <p className="top__navbar__link" onClick={() => route('/')}>Home</p>
                    <p className="top__navbar__linktwo">Create task</p>
                    <p className="top__navbar__linkthree" onClick={() => route('/business')}>For Business</p>
                </div>
                <div className="top__GoNow">GoNow</div>
                <div className="top-panel__menu-button">
                    <img src="./images/menu.svg" className="menu"/>
                    <div class="dropdown-content">
                        <p className="dropdown-content__one" onClick={() => route('/')}>Home</p>
                        <p className="dropdown-content__two">Create tasks</p>
                        <p className="dropdown-content__three" onClick={() => route('/business')}>For Business</p>
                    </div>
                </div>
            </div> 
            
            <div className="description">
                    <img src="./images/hero-image-mobile.png" className="image-mobile"/>
                    <div className="description__info">
                        <p className="description__info__one">Learn, Earn Money & Get Connected</p>
                        <p className="description__info__two">Learn industry required skills, earn money while doing so and get connected to your future employer.</p>
                    </div>
                    <img src="./images/hero-image.png" className="image"/>
            </div> 

            <div className="get-started">
                <img src="./images/getstarted-mobile.png" className="get-started__image__two"/>
                <img src='./images/getstarted.png' className="get-started__image"/>
                <div className="get-started__text">
                    <p className="get-started__text__step">Get started in 3 easy steps</p>
                    <div className="get-started__text__steps">
                        <div className="get-started__text__steps__content1">
                            <img src ="./images/youtube.svg" className="get-started__text__steps__images1"/>
                            <p className="get-started__text__steps__one">Watch online learning videos.</p>
                        </div>
                        <div className="get-started__text__steps__content">
                            <img src="./images/clipboard-list.svg" className="get-started__text__steps__images2"/>
                            <p className="get-started__text__steps__two">Get assigned to tasks and earn money.</p>
                        </div>
                        <div  className="get-started__text__steps__content">
                            <img src="./images/rocket.svg" className="get-started__text__steps__images3"/>
                            <p className="get-started__text__steps__three">Get access to interview coaching for your career.</p>
                        </div>
                    </div>
                </div>
            </div> 
           
             <div className="form">
                <img src="./images/Group-mobile.png" className="form__images__two"/>
                <img src="./images/Group.png" className="form__images"/>
                <div className="form__info">
                    <p className="form__info__big">I am interested</p>
                    <p className="form__info__small">Curabitur sollicitudin elit est vitae placerateros convallis eu. Must be between age 15-24.</p>
                    <form className="form__info__details">
                        <InputTwo 
                        h5 ="Full Name" 
                        placeholder = 'Jane Doe'
                        type="text"/>
                        <InputTwo 
                        h5 ="Phone Number" 
                        placeholder = '08137829472'
                        type="tel"
                        />
                        <InputTwo 
                        h5='Email Address'
                        placeholder ="johnDoe@mail.com" 
                        type="email"
                        /> 
                        <select className="education-level" id="education-level"> 
                            <option value="highest-education-level"> Highest level of Education</option>
                            <option value="">Dave</option> 
                            <option value="">Pumpernickel</option> 
                            <option value="">Reeses</option> 
                        </select>
                        <div className="form__info__details__button">Sign up</div>
                    </form>
                </div>
            </div> 
            <Footer />
{/*             
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
            </div>  */}
            </div>
        </div>
    )
}
export default Homepage;