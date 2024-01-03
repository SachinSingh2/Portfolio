import React from 'react'
import '../css/Portfolio.css'
import Blog from '../images/BlogImage.png'
import expresslogo from '../images/Express.png'
import mongooseLogo from '../images/mongooselogo.png'
import mongoDbLogo from '../images/Mongodblogo.png'
import redux from '../images/redux.svg'
import MovieApp from '../images/movieapp.png'

export default function Portfolio() {
  return (
    <>
    {/* First Project  */}
    <div className='BlogWebsiteBox  container my-3'>
      <h1>Blog Website</h1>
      {/* <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit excepturi cupiditate laborum qui odio maiores id. Nesciunt voluptates deleniti esse ipsum sint repellendus ipsa ad quisquam mollitia earum, vitae culpa a reprehenderit repellat reiciendis odio quis eveniet autem nostrum recusandae similique, fugit sapiente. Ea iste rem assumenda aspernatur optio iusto?</p> */}
      <ul>
        <li> Created a dynamic blog website using MERN Stack</li>
        <li> Power of blog writing, image uploading, and title and
 description  for enhanced user experience.</li>
 <li>Implemented profile capabilities enabling users to conveniently sort their blogs
 based on date (newest to oldest).</li>
 <li> HTML, CSS, React, and Bootstrap for the front implementation.</li>
 <li>Integrated MongoDB Atlas cloud database with Mongoose for retrieval of blog data.</li>
      </ul>





{/* --------------------------- */}
<div className="ProjectBoxMain  p-2">

      <div className="ProjectBoxInner p-2">
        {/* ScreenShotBox */}
       <a target='blank' href="https://inspiring-hamster-3a1eee.netlify.app"> <div className="ScreenShotBox  p-3 md-col-6">
          {/* Content for ScreenShotBox */}
          <img width="100%" src={Blog} alt="" />
        </div></a>


        {/* TechnologyBox */} 
        <a target='blank' href="https://inspiring-hamster-3a1eee.netlify.app">
        <div className="TechnologyBox  p-5">
          <div style={{textAlign:"center"}} ><h1>Technology Used</h1></div>

          <div className='FrontendTechnology'>
          <h2 className='mx-4 my-3' >Front End</h2>
            <i class="fa-brands fa-html5 fa-5x mx-4" style={{color:"#f06529"}}></i>

          <i class="fa-brands fa-css3-alt fa-5x mx-4" style={{color:"#2265d8"}}></i>

          <i class="fa-brands fa-square-js fa-5x mx-4" style={{color:"yellow"}}></i>

          <i class="fa-brands fa-bootstrap fa-5x mx-4" style={{color:"#4643df"}}></i>

          <i class="fa-brands fa-react fa-5x fa-spin mx-2" style={{color:"#61DBFB"}}></i>
          
        </div>

        {/* BackendTechnology */}
        <div  className="BackendTechnology">
        <h2 className='mx-4 my-3' >Backend End</h2>

        <i class="fa-brands fa-node fa-5x mx-4" style={{color:"#026E00"}}></i>

        <img style={{width:"200px" , height:"110px"}} src={expresslogo} alt="ExpressLogo" />

        <img style={{width:"200px" , height:"100px"}} src={mongooseLogo} alt="MongooseLogo" />

        <img style={{width:"200px" , height:"100px"}} src={mongoDbLogo} alt="Mongodblogo" />
        </div>

        </div> </a>



      </div>

    </div>
{/* ---------------Mobile view----------------------- */}

<div style={{textAlign:"center"}} className="ForSmallScreenDiv">
        <div>
        <h1 style={{textAlign:"center"}} >Tehcnology Used</h1>
        <i class="fa-brands fa-html5 fa-2x mx-3" style={{color:"#f06529"}}></i>

<i class="fa-brands fa-css3-alt fa-2x mx-3" style={{color:"#2265d8"}}></i>

<i class="fa-brands fa-square-js fa-2x mx-3" style={{color:"yellow"}}></i>

<i class="fa-brands fa-bootstrap fa-2x mx-3" style={{color:"#4643df"}}></i>

<i class="fa-brands fa-react fa-2x fa-spin mx-3" style={{color:"#61DBFB"}}></i>
        </div>
{/* Back */}
        <div>
        <i class="fa-brands fa-node fa-2x mx-3" style={{color:"#026E00"}}></i>

<img style={{width:"90px" , height:"50px"}} src={expresslogo} alt="ExpressLogo" />

<img style={{width:"80px" , height:"80px"}} src={mongooseLogo} alt="MongooseLogo" />

<img style={{width:"80px" , height:"80px"}} src={mongoDbLogo} alt="Mongodblogo" />
        </div>

</div>
{/* --- */}

    </div>

{/* --------------------------------------------------------------------------------------------------------------------------------------------------- */}
<div className='PortfolioHr' >
  <hr />
</div>
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------- */}
<div className='BlogWebsiteBox  container my-3'>
      <h1 style={{textAlign:'start'}} >Movie Finder</h1>

      <ul style={{textAlign:"start" }} >
        <li  > Created a Movie information finder website</li>
        <li> The movie information finder app is crafted with the power of React-Redux with
 Bootstrap.</li>
 <li>
This website offers an immersive experience for cinephiles, allowing them to
 explore comprehensive details about their favorite movies, including cast
 information, release years, IMDb ratings, and much more.</li>
 <li>
Beyond that, it keeps you in the loop with the latest releases and upcoming
 gems in the world of cinema.</li>
      </ul>





{/* --------------------------- */}
<div className="ProjectBoxMain  p-2">

      <div className="ProjectBoxInner p-2">
        {/* ScreenShotBox */}
       <a target='blank' href="https://glowing-sunburst-6ac00e.netlify.app"> <div className="ScreenShotBox  p-3 md-col-6">
          {/* Content for ScreenShotBox */}
          <img width="100%" src={MovieApp} alt="" />
        </div></a>


        {/* TechnologyBox */}
        <a href="https://glowing-sunburst-6ac00e.netlify.app" target='blank' >
        <div className="TechnologyBox  p-5">
          <div style={{textAlign:"center"}} ><h1>Technology Used</h1></div>

          <div className='FrontendTechnology'>
          <h2 className='mx-4 my-3' >Front End</h2>
            <i class="fa-brands fa-html5 fa-5x mx-4" style={{color:"#f06529"}}></i>

          <i class="fa-brands fa-css3-alt fa-5x mx-4" style={{color:"#2265d8"}}></i>

          <i class="fa-brands fa-square-js fa-5x mx-4" style={{color:"yellow"}}></i>

          <i class="fa-brands fa-bootstrap fa-5x mx-4" style={{color:"#4643df"}}></i>

          <i class="fa-brands fa-react fa-5x fa-spin mx-2" style={{color:"#61DBFB"}}></i>

          <img width="80px" height="100px" style={{marginBottom:"50px"}} className='mx-4 ' src={redux} alt="" />
          
        </div>


{/* A little text about this app */}
<p>This app is created on Frontend with the power of react-redux . For desginign we have used Bootstrap and mdb Bootstrap . To fetch the movies we have used an API which is helping us to get the infomration about out favourite movies.</p>
        </div> </a>



      </div>

    </div>
{/* ---------------Mobile view----------------------- */}
<div style={{textAlign:"center"}} className="ForSmallScreenDiv">
        <div>
        <h1 style={{textAlign:"center"}} >Tehcnology Used</h1>
        <i class="fa-brands fa-html5 fa-2x mx-3" style={{color:"#f06529"}}></i>

<i class="fa-brands fa-css3-alt fa-2x mx-3" style={{color:"#2265d8"}}></i>

<i class="fa-brands fa-square-js fa-2x mx-3" style={{color:"yellow"}}></i>

<i class="fa-brands fa-bootstrap fa-2x mx-3" style={{color:"#4643df"}}></i>

<i class="fa-brands fa-react fa-2x fa-spin mx-3" style={{color:"#61DBFB"}}></i>

<img width="35px" height="100px" style={{marginBottom:"10px"}} className='mx-3 ' src={redux} alt="" />
        </div>


</div>

{/* --- */}

    </div>

    </>
  )
}
