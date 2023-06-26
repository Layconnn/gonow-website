import React, { useEffect, useState } from "react";
import "../styles/pages/Business.scss";
// import Input from "../components/Input/Input";
import InputWithPlaceholder from "../components/inputWithPlaceholder";
import Validation from "../components/validation";
import { useNavigate } from "react-router";
import Api from "../api/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import HomeInput from "../components/homeInput";
import CountryInput from "../components/countryInput";
import Footer from "../components/footer";
import ErrorMessage from "../components/form-comps/errorMessage";
/*import Header from "../components/Header/Header";*/

function Business() {
  const [isWhatsAppNumber, setIsWhatsAppNumber] = useState(false);
  const [triedToSubmit, setTriedToSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    is_whatsapp: false
});
  const url = "https://api-staging.liveable.ng/go/landing";
  const router = useNavigate();
  const [errors, setErrors] = useState({});

  const handleCheckboxChange = (e) => {
    if (!isWhatsAppNumber) {
      values.is_whatsapp = true;
    } else if (isWhatsAppNumber) {
      values.is_whatsapp = false;
    }
    setIsWhatsAppNumber(e.target.checked);
  };

  useEffect(() => {
    console.log(values);
  });

  const handleSubmit = async(e) => {
    setTriedToSubmit(true);
    // e.preventDefault()
    setErrors(Validation(values));
    if (values.name && values.phone && values.email ) {
      setIsLoading(true);
      try{
        const res = await Api.post(url, {
            name: values.name,
            phone: values.phone,
            email: values.email,
            is_whatsapp: isWhatsAppNumber,
          })
        console.log(res.data)
    }
      catch(err){
        console.log(err);
      }
      finally{
        setIsLoading(false)
      }
        toast.success('Sign up  successful!')
    } 
  };

  const handleInput = (e) => {
    const newData = { ...values };
    newData[e.target.name] = e.target.value;
    setValues(newData);
  };

  // const number = values.phone;

  const email_pattern = /^(?![.-])((?![_.-][_.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;
  return (
    <div className="Business-page">
      <div className="Business-page__container">
        {/*<Header/>*/}

        <div className="top">
          <p className="top__logo">GoNow</p>
          <div className="top__navbar">
            <p className="top__navbar__link" onClick={() => router("/")}>
              Home
            </p>
            <p className="top__navbar__linktwo">Create tasks</p>
            <p
              className="top__navbar__linkthree"
              onClick={() => router("/business")}
            >
              For Business
            </p>
          </div>
          <div className="top__GoNow">Go Now</div>
          <div className="top-panel__menu-button">
            <img src="./images/menu.svg" className="menu" />
            <div className="dropdown-content">
              <p onClick={() => router("/")}>Home</p>
              <p>Create tasks</p>
              <p onClick={() => router("/business")}>For Business</p>
            </div>
          </div>
        </div>

        <div className="page-description">
          <img
            src="./images/business-mobile.png"
            className="page-description__image-mobile"
          />
          <div className="page-description__info">
            <p className="page-description__info__one">
              Outsource your simple but time-consuming tasks
            </p>
            <p className="page-description__info__two">
              Get them done in record time, at great rates and increase your
              social impact while at it
            </p>
          </div>
          <img
            src="./images/business.png"
            className="page-description__image"
          />
        </div>
        <div className="signup-form">
          <p className="signup-form__header">Sign up to create a task</p>
          <div className="signup-form__info">
            <form onSubmit={handleSubmit}>
              <div className="signup-form__info__inputs">
                <div className="signup-form__info__inputs__fname">
                  <InputWithPlaceholder
                    name="name"
                    type="text"
                    h5="Full Name"
                    onChange={handleInput}
                    value={values.name}
                  />
                  {/* {
                    triedToSubmit && !values.name && <ErrorMessage message={ values.name ? "" : "Full Name is required" } />
                  } */}
                  {triedToSubmit && !values.name
                  &&
                  <span className="error">{errors.name}</span>
                  }
                </div>

                {/* <div className="signup-form__info__inputs__lname">
                                <InputWithPlaceholder 
                                name= 'name'
                                type='text'
                                h5='Last Name'
                                value= {values.name}
                                onChange= {handleInput}
                                // pattern= '^[a-zA-Z]{3,}$'
                                />
                                {errors.is_whatsapp && <span className='error'>{errors.name}</span> }
                            </div> */}

                <div className="signup-form__info__inputs__email">
                  <InputWithPlaceholder
                    // pattern= '/^(?![.-])((?![_.-][_.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/'
                    name="email"
                    type="email"
                    onChange={handleInput}
                    value={values.email}
                    h5="Email"
                  />
                   {/* {
                    triedToSubmit && !email_pattern.test(values.email) && <ErrorMessage message={ values.email ? "Please enter a valid email" : "Email is required" } />
                  } */}
                  {triedToSubmit && !email_pattern.test(values.email)
                  &&
                    <span className="error">{errors.email}</span>
                  }
                </div>
                {/* <div className="signup-form__info__inputs__phone">
                            <InputWithPlaceholder 
                                // pattern= '^\d{11}$'
                                name= 'phone'
                                type= 'tel'
                                h5= 'Whatsapp Number'
                                onChange= {handleInput}
                                placeholder ='90100000000'
                                value= {values.whatsappNum}
                                />
                                {errors.phone && <span className="error" >{errors.phone}</span> }
                           </div> */}
                <div className="signup-form__info__inputs__phone">
                  <CountryInput
                    placeholder="+234"
                    h5="Phone Number"
                    onChange={(value) => setValues({ ...values, phone: value })}
                    value={values.phone}
                    type="tel"
                  />
                   {/* {
                    triedToSubmit && values.phone.length !== 14 && <ErrorMessage message={ values.phone ? "Invalid phone number" : "Your number is required" } />
                  } */}
                  {triedToSubmit && values.phone?.length !== 14
                  &&
                    <span className="error">{errors.phone}</span>
                  // number?.length !== 14 && values.phone
                  // ?
                  //   <span className="error">Invalid Phone number</span>
                  // : 
                  }
                </div>
              </div>
              <div className="signup-form__info__inputs__check">
                <input
                  type="checkbox"
                  className="signup-form__info__inputs__check__box"
                  checked={isWhatsAppNumber}
                  onChange={handleCheckboxChange}
                />
                <label>This is my whatsapp Number </label>
              </div>
              <button
                // onClick={() => {
                //   values ? (type = "submit") : '';
                // }}
                className="signup-form__info__button"
              >
                {
                    isLoading && values.name && values.email && values.phone
                    ?
                    <div className="signup-form__info__button__loading"></div>
                    :
                    'Go Now'
                }
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
        <Footer />

        {/* <div className="footer">
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
            </div>  */}
      </div>
    </div>
  );
}
export default Business;
