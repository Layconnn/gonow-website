import React, { useState } from "react";
import Input from "../components/Input/Input";
import { useNavigate } from "react-router";
import Api from "../api/api";
/*import Header from "../components/Header/Header";*/

function Business(){
    const [values, setValues] = useState({
        name: "",
        phone: "",
        email: "",
        is_whatsapp: ""
    })
    const date = new Date();
    const url = 'https://api-staging.liveable.ng/go/landing';
    const route = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        Api.post(url, {
          name: values.name,
          phone: values.phone,
          email: values.email,
          is_whatsapp: values.is_whatsapp
        } )
        .then((response) => {console.log(response.data)} )
        .catch(err => console.log(err));
    };

    const handleChange = (e) => {
        const newData = {...values}
        newData[e.target.name] = e.target.value;
        setValues(newData)
      };

    return(
        <div className="Business-page">
            {/*<Header/>*/}

            <div className="top">
            <p className="top__logo">GoNow</p>
            <div className="top__navbar">
                <p className="top__navbar__link" onClick={() => route('/')}>Home</p>
                <p className="top__navbar__linktwo">Create tasks</p>
                <p className="top__navbar__linkthree" onClick={() => route('/business')}>For Business</p>
            </div>
            <div className="top__GoNow">Go Now</div>
            <div className="top-panel__menu-button">
                <img src="./images/menu.svg" className="menu"/>
                <div class="dropdown-content">
                    <p onClick={() => route('/')}>Home</p>
                    <p>Create tasks</p>
                    <p onClick={() => route('/business')}>For Business</p>
                </div>
            </div>
        </div>

           <div className="page-description">
                <img src="./images/business-mobile.png" className="page-description__image-mobile"/>
                <div className="page-description__info">
                    <p className="page-description__info__one">Outsource your simple but time-consuming tasks</p>
                    <p className="page-description__info__two">Get them done in record time, at great rates and increase your social impact while at it</p>
                </div>
                <img src="./images/business.png" className="page-description__image"/>
            </div>
            <div className="signup-form">
                <p className="signup-form__header">Sign up to create a task</p>
                <div className="signup-form__info">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <Input className='signup-form__info__first-name' placeholder ="First Name" values={values.name} type="text"
                        name='name'
                        onChange={(e) => handleChange(e)}
                        />
                        <Input className='signup-form__info__last-name' placeholder ="Last Name" type="text"
                        values={values.phone}
                        name='phone'
                        onChange={(e) => handleChange(e)}
                        />
                        <Input className='signup-form__info__email' placeholder ="Email Address" type="email"
                        values={values.email}
                        name='email'
                        onChange={(e) => handleChange(e)}
                        /> 
                        <Input className='signup-form__info__whatsapp-number' placeholder ="Whatsapp Number" type="text"
                        values={values.is_whatsapp}
                        name='is_whatsapp'
                        onChange={(e) => handleChange(e)}
                        />
                        <button type="submit" className="signup-form__info__button">Go Now</button>
                    </form>
                </div>
            </div>
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
                            <div className="footer-email">
                                <img className="footer-email__icon" src="./images/mail.svg"/>
                                <p>info@gonow.com</p>
                            </div>
                            <div className="footer-contact">
                                <img className="footer-contact__icon" src="./images/phone-call.svg"/>
                                <p>0810 0000 000</p>
                            </div>
                        </div>
                        <div className="socials">
                            <p className="socials__text">Follow us</p>
                            <div className="socials__handles">
                                <img className="socials__handles__icons" src="./images/facedbook.svg"/>
                                <img className="socials__handles__icons" src="./images/instagram.svg"/>
                                <img className="socials__handles__icons" src="./images/linkedin.svg"/>
                                <img className="socials__handles__icons" src="./images/twitter.svg"/>
                                <img className="socials__handles__icon" src="./images/facedbook-two.svg"/>
                                <img className="socials__handles__icon" src="./images/instagram-two.svg"/>
                                <img className="socials__handles__icon" src="./images/linkedin-two.svg"/>
                                <img className="socials__handles__icon" src="./images/twitter-two.svg"/>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="copyright">Copyright © {date.getFullYear()} gonow</p>
            </div>
        </div>
    )
}
export default Business;