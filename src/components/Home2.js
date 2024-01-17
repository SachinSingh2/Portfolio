import React  from 'react';
import '../css/Home2.css';
import Main from '../images/main2.png';
import { Link } from 'react-router-dom';
import pdf from '../Files/Resume.pdf'
import { useTypewriter , Cursor } from 'react-simple-typewriter';

export default function Home2() {

  // Animation
  // const [text , setText] = useState("Web Developer  ")
  const [typeText] = useTypewriter({
    words:['Full Stack Developer' , 'Skilled Designer' , 'MERN Stack Enthusiast' , 'Continuous Learner'],
    loop:{},
    typeSpeed:100,
    delaySpeed:10
  })
  return (
    <>
      <div className="container-fluid my-2">
        <div className="row">
          <div data-aos="fade-right" className="col-md-6 order-md-2 ImageDiv p-5">
            {/* Image for the right column */}
            <img src={Main} alt="" style={{ width: '100%' }} />
          </div>

          <div data-aos="fade-left" className="col-md-6 order-md-1  p-5">

            <div  ><span style={{fontSize:"25px"}} >Hi</span> There! I am Sachin Singh</div>


            {/* Main Head */}
            <div className='my-4' >
            <h4>A Passionate</h4>
            <h1 data-aos="fade-down" className='EffectText'>{typeText} <span><Cursor/></span>  </h1>

            </div>
            {/* ------------ */}

          <div data-aos="fade-up" className='DetailAboutMe'>
            <p> I am a passionate, driven-by-results MERN Stack Developer with
              impressive expertise in developing effective, accessible web apps.
              I am proficient in both front
end and back-end programming languages
              </p>
          </div>


          <div data-aos="fade-left" className='btnDiv my-2' >
            <div style={{marginTop:"50px"}} className="row ">
                <div  className="col-sm-4 p-1  "> <Link to='/portfolio' > <button style={{backgroundColor:"white" , color:"black" , fontWeight:"800" , width:"110px"}} className='btn '>Portfolio</button></Link></div>
                <div className="col-sm-4 p-1 "> <a href={pdf} download="Resume.pdf" ><button  style={{backgroundColor:"white" , color:"black" , fontWeight:"800" , width:"110px"}} className='btn ' >Resume</button></a> </div>


                
                <div  className="col-sm-4 p-1 "> <Link to='/contact' > <button style={{backgroundColor:"white" , color:"black" , fontWeight:"800" , width:"110px"}} className='btn '>Contact</button> </Link></div>
            </div>
          </div>

          </div>
        </div>
      </div>
    </>
  );
}
