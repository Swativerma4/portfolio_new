import { useState, useEffect } from "react";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";

import "../Skill.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export default function contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service__verma', 'template_oz1nyqm', form.current, {
          publicKey: 'atsfuCb--N5sLVE4t',
        }) 
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );e.target.reset()
    };
    const [contactInfo, setContactInfo] = useState({
        phone: "+91 7017712589",
        email: "swati2727verma@gmail.com",
        address: "Nodia",
      });
      useEffect(() => {
        // Simulate fetching data
        const fetchContactInfo = async () => {
          // Simulated data
          const dummyData = {
            phone: "+91 7017712589",
            email: "swati2727verma@gmail.com",
            address: "Nodia",
          };
    
          // Simulate delay for fetching
          await new Promise((resolve) => setTimeout(resolve, 1000));
    
          // Set the fetched data
          setContactInfo(dummyData);
        };
    
        fetchContactInfo();
      }, []);
    
  return (
    <div>
      <>
      <section className="contact-section" id="contact-section">
        <div className="container flexSB">
          <div className="contact-form-box w-half">
            <div className="section-header">
              <h2 className="section-title">Let’s work together!</h2>
              <p>I design and code beautifully simple things and I love what I do. Just simple like that!</p>
            </div>

            <div ref={form} onSubmit={sendEmail} className="tj-contact-form">
              <form id="contact-form">
                <div className="flexSB gap">
                  <div className="form_group">
                    <input type="text" name="conName" id="conName" placeholder=" Your Name" />
                  </div>
               
                </div>
                <div className="flexSB gap">
                  <div className="form_group">
                    <input type="email" name="conEmail" id="conEmail" placeholder="Email address" />
                  </div>
                  <div className="form_group">
                    <input type="tel" name="conPhone" id="conPhone" placeholder="Phone number" />
                  </div>
                </div>
                <div className="form_group">
                  <select name="conService" id="conService" className="tj-nice-select">
                    <option value="" selected disabled>
                      Choose Service
                    </option>
                    <option value="braning">Front-End</option>
                  
                    <option value="uxui">UI/UX Design</option>
                    <option value="app">Backend</option>
                  </select>
                </div>
                <div className="form_group">
                  <textarea name="conMessage" id="conMessage" placeholder="Message"></textarea>
                </div>
                <div className="form_btn">
                  <button type="submit" className="btn tj-btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="contact-info-list  w-half">
            <ul className="ul-reset">
              <li>
                <div className="icon-box">
                  <IoCallOutline size={25} />
                </div>
                <div className="text-box">
                  <p>Phone</p>
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </div>
              </li>
              <li>
                <div className="icon-box">
                  <TfiEmail />
                </div>
                <div className="text-box">
                  <p>Email</p>
                  <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                </div>
              </li>
              <li>
                <div className="icon-box">
                  <CiLocationOn size={25} />
                </div>
                <div className="text-box">
                  <p>Address</p>
                  <a href="#">{contactInfo.address}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
    </div>
  )
}
