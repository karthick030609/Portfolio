import React from 'react'
import './Contact.css'
import { MdEmail } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";


const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2d52c91a-53c1-48db-a2c8-7c64fc6ccc85");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  const contact = {
    Email: 'karthick426855@gmail.com',
    phoneNo: '9342463941',
    place: 'India,Tamilnadu'
  }


  return (
    <>
      <div id='Contact' className='about'>
        <h1>Contact <span style={{ color: 'violet' }}> Me</span></h1>
      </div>

      <div className='contactSection'>
        <div className='contactLeft'>
          <h1>Lets's Talk</h1>
          <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me work on. You can contact anytime.</p>
          <div className="contactDetails">
            <div className="contactDetail">
              <MdEmail /><p>{contact.Email}</p>

            </div>
            <div className="contactDetail">
              <MdAddIcCall /> <p>+91 {contact.phoneNo}</p>
            </div>
            <div className="contactDetail">
              <MdLocationPin /><p>{contact.place}</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className='contactRight'>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" name="email" placeholder='Enter your Email' />
          <label htmlFor="">Write your text here</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
          <button className='contactSubmit' type='submit'>Submit</button>
        </form>
      </div>



    </>
  )
}

export default Contact
