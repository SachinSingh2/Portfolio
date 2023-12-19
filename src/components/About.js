import React from 'react'
import '../css/About.css'
import expresslogo from '../images/Express.png'
import mongooseLogo from '../images/mongooselogo.png'
import mongoDbLogo from '../images/Mongodblogo.png'
import next from '../images/Next.png'


export default function About() {
  return (
    <>
    {/* About Me Box */}
    <div className="container AboutMeBox  my-4">
      <h1 data-aos="fade-up" style={{fontWeight:"600" , fontSize:"40px" , color:"white"}}>About Me</h1>
      <hr style={{color:"lightgray"}} />
    </div>



    {/* Heading for the page */}
    <div style={{ color: "gray", textAlign: "center" }} className="container my-5">
      <h1  className='helping'>
        Helping People thrive into the World of Development with
      </h1>
    </div>

    {/* card in which i can help */}
    <div style={{color:"white"}} className="container">
      <div  className="row">

{/* Card-1 */}
        <div  data-aos="fade-up" className="col-md-4  px-2 py-2">
        <div style={{padding:"10px 15px" , border:"solid 1px gray"}} >
            
            <h4 style={{fontWeight:"900" , textAlign:"center"}}>Design</h4>
            <p style={{color:"gray"}}>With the knowledge of Photoshop and canva i can craete beutiful logo  , banner and many more for the website to look Beutiful and amazing</p>

          </div>
        </div>

{/* Card-2 */}
<div data-aos="fade-up" className="col-md-4  px-2 py-2">
        <div style={{padding:"10px 15px" , border:"solid 1px gray"}} >
            
            <h4 style={{fontWeight:"900" , textAlign:"center"}}>Development</h4>
            <p style={{color:"gray"}}>For Devlopment i craete responsive and dynamic website with the help of react and boostrap . To Enhanve the SEO i prefer using Next js</p>

          </div>
        </div>

{/* Card-3 */}
<div data-aos="fade-up" className="col-md-4  px-2 py-2">
        <div style={{padding:"10px 15px" , border:"solid 1px gray"}} >
            
            <h4 style={{fontWeight:"900" , textAlign:"center"}}>The full package</h4>
            <p style={{color:"gray"}}>As for full Package i can APIs with the help of node , express  and mongodb for Database. Which helps to get information from database and show it in frontend</p>

          </div>
        </div>

      </div>
<hr className='my-5' style={{color:"white" , fontWeight:"900"}} />
    </div>


    {/* SKILLS */}



{/* Frontend */}
    <div className="container">
      <h1 style={{color:"white" , textAlign:'center' ,fontSize:"50px"}}>Frontend Skills</h1>
    </div>


    <div className="container">
      
      <div className="row">

        <div style={{color:"white"}} className="col-md-5 py-5 px-2">
          
          <p data-aos="fade-right" style={{color:"gray" , letterSpacing:"1px"}}>I am a proficient web developer with expertise in HTML, CSS, and JavaScript, utilizing these languages to structure content and create visually appealing and interactive user interfaces. My skills extend to React, where I specialize in building modular and scalable applications. I am well-versed in front-end frameworks such as Bootstrap for streamlined design and Next.js for enhanced performance and SEO optimization. Additionally, I leverage Tailwind CSS for efficient and responsive UI development.</p>
        </div>

{/* Second Box */}
        <div data-aos="fade-up" className="col-md-7 ">

          <div className="row text-center">

            <div className="col-md-4 p-5">
            <i class="fa-brands fa-html5 fa-5x fa-fade" style={{color:"#f06529"}}></i>
            </div>

            <div className="col-md-4 p-5">
            <i class="fa-brands fa-css3-alt fa-5x fa-fade" style={{color:"#2265d8"}}></i>
            </div>

            <div className="col-md-4 p-5">
            <i class="fa-brands fa-square-js fa-5x fa-fade" style={{color:"yellow"}}></i>
            </div>
            
            <div className="col-md-4 p-5">
            <i class="fa-brands fa-bootstrap fa-5x fa-fade" style={{color:"#4643df"}}></i>
            </div>
            
            <div className="col-md-4 p-5">
            <i class="fa-brands fa-react fa-5x fa-spin" style={{color:"#61DBFB"}}></i>
            </div>

            <div className="col-md-4 p-5 " >
              <img  className='my-3' width="150px" src={next} alt="" />
            </div>

          </div>

        </div>

      </div>

    </div>

<div className="container">
    <hr className='my-3' style={{color:"white" , fontWeight:"900"}} />
</div>

    {/* ----------------------------------------------Backend------------------------------------------------ */}
    {/* Frontend */}
    <div className="container my-5">
      <h1 style={{color:"white" , fontSize:"50px" , textAlign:'center'}}>Backend Skills</h1>
    </div>


    <div className="container">
      
      <div className="row">
{/* Second Box */}
<div data-aos="fade-up" className="col-md-7 ">

<div className="row text-center">

  <div className="col-md-6 p-5">
  <i class="fa-brands fa-node fa-5x " style={{color:"#026E00"}}></i>
  </div>

  <div className="col-md-6 my-5">
    <img style={{width:"200px" , height:"110px"}} src={expresslogo} alt="ExpressLogo" />
  </div>

  <div className="col-md-6 ">
  <img style={{width:"200px" , height:"100px"}} src={mongooseLogo} alt="MongooseLogo" />
  </div>
  
  <div className="col-md-6 ">
  <img style={{width:"200px" , height:"100px"}} src={mongoDbLogo} alt="Mongodblogo" />
  </div>
  
  

</div>

</div>


{/* Text for frontend */}

        <div style={{color:"white "}} className="col-md-5 py-5 px-2">
          
          <p data-aos="fade-up" style={{color:"gray" , letterSpacing:"1px"}}>On the backend, I am skilled in Node.js and Express, using these technologies to build robust and scalable server-side applications. My expertise extends to MongoDB with Mongoose, allowing me to efficiently model and interact with databases. I am adept at leveraging version control systems, particularly Git, and managing repositories on GitHub. This combination of technologies empowers me to create dynamic and data-driven web applications with a focus on reliability and performance.</p>
        </div>

      </div>

    </div>


<div className='container'>
<hr className='my-3' style={{color:"white" , fontWeight:"900"}} />  
</div>


<div style={{display:"flex" , justifyContent:"cebter" , textAlign:"center"}} className="container ">
    {/* Social media */}
   <section className="d-flex justify-content-center justify-content-lg-between p-4  ">

<div   className='text-center'>
  <a style={{fontSize:"15px"}} href="/" className="me-4 text-reset">
    <i style={{color:"white"}} className="fab fa-facebook-f fa-2x"></i>
  </a>
  <a style={{fontSize:"15px"}} href="/" className="me-4 text-reset">
    <i style={{color:"white"}} className="fab fa-twitter fa-2x"></i>
  </a>

  <a style={{fontSize:"15px"}} href="https://instagram.com/sachin_singh981?igshid=OGQ5ZDc2ODk2ZA==" className="me-4 text-reset">
    <i style={{color:"white"}} className="fab fa-instagram fa-2x"></i>
  </a>
  <a style={{fontSize:"15px"}} href="https://www.linkedin.com/in/sachin-singh-51b973245" className="me-4 text-reset">
    <i style={{color:"white"}} className="fab fa-linkedin fa-2x"></i>
  </a>
  <a style={{fontSize:"15px"}} href="https://github.com/SachinSingh2" className="me-4 text-reset">
    <i style={{color:"white"}}  className="fab fa-github fa-2x"></i>
  </a>
</div>
</section>






</div>
    
    </>
  )
}
