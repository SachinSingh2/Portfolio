import React from "react";
import "../css/Contact.css";
import profile from "../happy-young-cute-illustration-face-profile-png-removebg-preview.png";

export default function Contact() {
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
              <p><a style={{textDecoration:"none" , color:"white" , fontSize:"15px"}} className="mx-3" href="/"><i class="fa-solid fa-2xl fa-x"></i></a></p>
              <p><a style={{textDecoration:"none" , color:"white" , fontSize:"15px"}} className="mx-3" href="/"><i class="fa-brands fa-2xl fa-linkedin"></i></a></p>
              <p><a style={{textDecoration:"none" , color:"white" , fontSize:"15px"}} className="mx-3" href="/"><i class="fa-brands fa-2xl fa-github"></i></a></p>
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
              <form action="/">
                <hr />

                <div  className="Inputdiv">
                  <label className="nameLabel px-2">What's Your Name ?</label>{" "}
                  <br />
                  <input
                    className="Input"
                    placeholder="Sachin Singh *"
                    type="text"
                  />
                </div>

                <hr />

                {/* Email */}

                <div  className="Inputdiv">
                  <label className="nameLabel px-2">What's Your email ?</label>{" "}
                  <br />
                  <input
                    className="Input"
                    placeholder="SachinSingh@gmail.com *"
                    type="email"
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
                    placeholder="9874563210 *"
                    type="number"
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
                  />
                </div>

                <hr />

                {/* Message */}
                <div  className="nameInputdiv">
                  <label className="nameLabel px-2">Your Message</label> <br />
                  <textarea
                    className="Input"
                    placeholder="Hello Sachin, Can you help me with..."
                    rows="4"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>
                <hr />

                {/* Send Button */}
                <div  className="sendBtnDiv text-center">
                  <button className="sendIt">Send it</button>
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
