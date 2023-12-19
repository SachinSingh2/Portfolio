import '../css/NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {


  // className=" navbar navbar-expand-lg bg-body-tertiary"
  return (
    <>

<nav className="MyNav navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link style={{color: "white", fontSize: "20px"}} className="navbar-brand" to="/"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >MyPortfolio</span></Link>

    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fa-solid fa-2xl fa-bars navbarToggleIcon " style={{color: "#ffffff"}}></i>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link style={{color: "white"}} className="nav-link active" aria-current="page" to="/"> <span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >Home</span> </Link>
        </li>
        <li className="nav-item">
          <Link style={{color: "white"}} className="nav-link active" aria-current="page" to="/portfolio"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >Portfolio</span></Link>
        </li>
        <li className="nav-item">
          <Link style={{color: "white"}} className="nav-link active" aria-current="page" to="/about"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >About</span></Link>
        </li>
        <li className="nav-item">
          <Link style={{color: "white"}} className="nav-link active" aria-current="page" to="/contact"><span data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >Contact</span></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>




{/* offcanvas start here */}




<div style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0 }}  className="offcanvas offcanvasdiv offcanvas-top"  tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">

        <Link data-bs-dismiss="offcanvas" aria-label="Close" style={{color:"white" , fontSize:"25px"}} className="navbar-brand" to="/">SamPortfolio</Link>

        {/* The dismmiss button */}
        <button  type="button" className="btn" data-bs-dismiss="offcanvas" aria-label="Close"><i className="fas fa-times fa-2xl" style={{ color: '#ffffff' }}></i></button>


        </div>
        <div className="offcanvas-body">

          {/* Off canvas information */}
          <div className="container-fluid  p-2">
            
            <div  className="container linkContainer ">
              <ul >
                <li><Link   to="/" > <span className="btn" data-bs-dismiss="offcanvas" aria-label="Close">Home</span></Link> </li>
                <li><Link   to="/portfolio"  ><span className="btn" data-bs-dismiss="offcanvas" aria-label="Close">Portfolio</span></Link></li>
                <li><Link   to="/about"   ><span className="btn" data-bs-dismiss="offcanvas" aria-label="Close">About</span></Link></li>
                <li><Link   to="/contact"  ><span className="btn" data-bs-dismiss="offcanvas" aria-label="Close">Contact</span></Link></li>
              </ul>
            </div>

          </div>
            

        </div>

        <div style={{color:"white"}} className="SocialMediaLinks">
        <section className="d-flex justify-content-center justify-content-lg-between p-4  ">

<div   className='text-center'>
  <a style={{fontSize:"24px"}} href="/" className="me-4 text-reset">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a style={{fontSize:"24px"}} href="/" className="me-4 text-reset">
    <i className="fab fa-twitter"></i>
  </a>

  <a style={{fontSize:"24px"}} href="https://instagram.com/sachin_singh981?igshid=OGQ5ZDc2ODk2ZA==" className="me-4 text-reset">
    <i className="fab fa-instagram"></i>
  </a>
  <a style={{fontSize:"24px"}} href="https://www.linkedin.com/in/sachin-singh-51b973245" className="me-4 text-reset">
    <i className="fab fa-linkedin"></i>
  </a>
  <a style={{fontSize:"24px"}} href="https://github.com/SachinSingh2" className="me-4 text-reset">
    <i className="fab fa-github"></i>
  </a>
</div>
</section>
        </div>

      </div>


    </>
  )
}
