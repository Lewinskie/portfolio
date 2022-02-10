import React from "react";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [fail, setFail] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1do55gg",
        "template_qpn0fjl",
        formRef.current,
        "user_5DIwTprilqfao6MsYed8j"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
          setFail(true);
        }
      );
    
  };

  return (
    <div className="c">
      <div className="cBg"></div>
      <div className="cWrapper">
        <div className="cLeft">
          <h1 className="cTitle">Let's discuss your project</h1>
          <div className="cInfo">
            <div className="cInfoItem">
              <img src={Phone} alt="" className="cIcon" />
              +254 705 313785
            </div>
            <div className="cInfoItem">
              <img src={Email} alt="" className="cIcon" />
              wangara94@gmail.com
            </div>
            <div className="cInfoItem">
              <img src={Address} alt="" className="cIcon" />
              Rongai, Nairobi Kenya
            </div>
          </div>
        </div>
        <div className="cRight">
          <p className="cDesc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeHolder="Name" name="user_name" />
            <input type="text" placeHolder="Subject" name="user_subject" />
            <input type="text" placeHolder="Email" name="user_email" />
            <textarea name="message" placeholder="Message" rows="5"></textarea>
            <button>Submit</button>
            {done && (
              <div className="cSuccess">
                <h5 className="cSuccessMessage">Message received!</h5>
              </div>
            )}
            {fail && (
              <div className="cFail">
                <h5 className="cFailMessage">
                  Something went wrong. Try again
                </h5>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
