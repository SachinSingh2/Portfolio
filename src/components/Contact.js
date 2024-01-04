import React, { useState } from "react";
import "../css/Contact.css";
import profile from "../happy-young-cute-illustration-face-profile-png-removebg-preview.png";
import {useNavigate} from 'react-router-dom'

export default function Contact() {

  const [loading , setloading] = useState(false)

  const navigate = useNavigate()

  const initialState = {
    name:'',
    email:"",
    contact:"",
    service:"",
    message:""
  }
  const [value , setValue] = useState(initialState)

  const handleOnChange = (e)=>{
    setValue({...value , [e.target.name]:e.target.value})
  }

  // HandleOnSUbmit
  const handleOnSubmit = async(e)=>{
    e.preventDefault()
    console.log(value)

    try {
      setloading(true)
    const data = await fetch('https://portfolioserver-tosr.onrender.com/AddUser' , {
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(value)   
    })

    const res = await data.json()
    setloading(false)

    if(res.status==="Success"){
      navigate('/')
    }

    if(res.status==="ContactShort"){
      alert(res.message)
    }


    } catch (error) {
      console.log(error.message)
      setloading(false)
    }

  }

  return (
    <>
      <div className="container my-2">
        <div className="row">
          <div className="ContactDiv2 col-sm-5 col-md-5 ">
            <div>
              <img  style={{ width: "30%" }} src={profile} alt="" />
            </div>

            {/* Contact Detail */}
            <div  className="contactDetailDiv">
              <label style={{color:"gray" , fontSize:"12px"}} className="contactLabel">CONTACT DETAIL</label>
              <p>ss0985211@gmail.com</p>
              <p>9821628507</p>
            </div>

            {/* Business Deatil */}
            <div  className="contactDetailDiv">
              <label style={{color:"gray" , fontSize:"12px"}} className="contactLabel">LOCATION</label>
              <p>Location: New Delhi , India</p>
            </div>

            {/* Socials */}
            <div  style={{paddingBottom:"100px"}} className="contactDetailDiv ">
              <label style={{color:"gray" , fontSize:"12px"}} className="contactLabel">Socials</label>

              <div style={{display:"flex"}} className="socialIcons my-2">
              <p><a style={{textDecoration:"none" , color:"white" , fontSize:"15px"}} className="mx-3" href="/"><i className="fa-solid fa-2xl fa-x"></i></a></p>
              <p><a style={{textDecoration:"none" , color:"white" , fontSize:"15px"}} className="mx-3" href="/"><i className="fa-brands fa-2xl fa-linkedin"></i></a></p>
              <p><a style={{textDecoration:"none" , color:"white" , fontSize:"15px"}} className="mx-3" href="/"><i className="fa-brands fa-2xl fa-github"></i></a></p>
              </div>
            </div>
          </div>

          {/* Second Box */}
          <div  className="ContactDiv1 col-sm-7 col-md-7  ">
            <div className="StartProjectHeading">
              <h1>Let's Start a </h1>
              <h1>Project Together</h1>
            </div>

            {/* Form */}
            <div  className="FormBox">
              <form onSubmit={handleOnSubmit} method="POST" action="/AddUser">
                <hr />

                <div  className="Inputdiv">
                  <label className="nameLabel px-2">What's Your Name ?</label>{" "}
                  <br />
                  <input
                    className="Input"
                    placeholder="Your Name here.."
                    type="text"
                    name="name"
                    onChange={handleOnChange}
                    required
                  />
                </div>

                <hr />

                {/* Email */}

                <div  className="Inputdiv">
                  <label className="nameLabel px-2">What's Your email ?</label>{" "}
                  <br />
                  <input
                    className="Input"
                    placeholder="Your Email here..."
                    type="email"
                    name="email"
                    onChange={handleOnChange}
                    required
                  />
                </div>

                <hr />

                {/* Contact Number */}

                <div  className="Inputdiv">
                  <label className="nameLabel px-2">
                    What's Your Contact ?
                  </label>{" "}
                  <br />
                  <input
                    className="Input"
                    placeholder="Your contact here..."
                    type="number"
                    name="contact"
                    onChange={handleOnChange}
                    required
                  />
                </div>

                <hr />

                {/* Services looking for */}
                <div  className="Inputdiv">
                  <label className="nameLabel px-2">
                    What Services are you looking for ?
                  </label>{" "}
                  <br />
                  <input
                    className="Input"
                    placeholder="Web development , Web Design..."
                    type="text"
                    name="service"
                    onChange={handleOnChange}
                    required
                  />
                </div>

                <hr />

                {/* Message */}
                <div  className="nameInputdiv">
                  <label className="nameLabel px-2">Your Message</label> <br />
                  <textarea
                    className="Input"
                    placeholder="Your message here ..."
                    required
                    name="message"
                    onChange={handleOnChange}
                    rows="4"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <hr />

                {/* Send Button */}
                <div  className="sendBtnDiv text-center">
                  {loading ?  <i className="fa-solid fa-spinner fa-2x fa-spin" style={{color: "white"}}></i> :<button type="submit" className="sendIt">Send it</button> }
                  
                </div>
              </form>
            </div>

            {/* Social Media */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4  ">
              <div  className="text-center">
                <a 
                  style={{ fontSize: "24px" }}
                  href="/"
                  className="me-4 text-reset"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  style={{ fontSize: "24px" }}
                  href="/"
                  className="me-4 text-reset"
                >
                  <i className="fab fa-twitter"></i>
                </a>

                <a
                  style={{ fontSize: "24px" }}
                  href="https://instagram.com/sachin_singh981?igshid=OGQ5ZDc2ODk2ZA=="
                  className="me-4 text-reset"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  style={{ fontSize: "24px" }}
                  href="https://www.linkedin.com/in/sachin-singh-51b973245"
                  className="me-4 text-reset"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  style={{ fontSize: "24px" }}
                  href="https://github.com/SachinSingh2"
                  className="me-4 text-reset"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
