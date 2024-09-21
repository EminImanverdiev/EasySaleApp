import React from 'react'
import './style.css'
import { FaPhone } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";

export default function ContactMain() {
  return (
    <div className='contact-main'>
           <div className="container">
              <div className="row">
                <div className="col-12">
                  <h2>BİZİMLƏ ƏLAQƏ</h2>
                    <div className="contact-box">
                        <h6>Dəstək:</h6>
                        <span><FaPhone className='contact-box-icon'/> <a href='#'>+994 51 588 89 68</a></span>
                    </div>
                    <hr />
                    <div className="contact-box">
                        <h6>Elektron-poçt:</h6>
                        <span><IoMailSharp className='contact-box-icon'/> <a href='#'>emin.imanverdievv@gmail.com</a></span>
                    </div>
                </div>

              </div>
           </div>
    </div>
  )
}
