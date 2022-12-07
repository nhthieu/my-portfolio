import { useState, useContext } from "react";
import { Element } from "react-scroll";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faPaperPlane, faMessage } from "@fortawesome/free-solid-svg-icons";

import { ThemeContext } from "~/ThemeContext";
import StorySet from "./StorySet";
import FormInput from "./FormInput";
import "./Contact.css";

function Contact() {
  const theme = useContext(ThemeContext).theme;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const validateForm = () => {
    const { name, email, message } = formData;
    if (name === "" || email === "" || message === "") {
      return false;
    }
    // Email validation
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.info("Message sent!")
  }

  return (
    <Element name="contact">
      <section className="contact">
        <div className="contact__content">
          <div className="contact__img">
            <StorySet />
          </div>
          <div className="contact__input-wrapper">
            <div className="contact__input-title">
              <span>contact me</span>
            </div>

            {/* Form section */}
            <form
              autoComplete="off"
              className="contact__input-area"
              onSubmit={handleSubmit}
            >
              <FormInput
                icon={faUser}
                type="text"
                name="name"
                placeholder="name"
                value={formData.name}
                handleChange={handleChange}
              />
              <FormInput
                icon={faEnvelope}
                type="email"
                name="email"
                placeholder="email"
                value={formData.email}
                handleChange={handleChange}
              />
              <FormInput
                icon={faMessage}
                type="text"
                name="message"
                placeholder="message"
                value={formData.message}
                handleChange={handleChange}
              />
              <button className="contact__input-submit">
                <span className="contact__input-submit-title">submit</span>
                <span className="contact__input-submit-icon">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </span>
              </button>
            </form>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={theme}
        />
      </section>
    </Element>
  );
}

export default Contact;