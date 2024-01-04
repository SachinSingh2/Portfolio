import React, { useState } from 'react'
import img from './Image.png'
import { useNavigate } from 'react-router-dom'

export default function AdminLogin({setIsUserAuth}) {
const navigate = useNavigate()

const initialValue = {
    email:"",
    password:""
}

const [value , setValue] = useState(initialValue)

    const handleOnChange = (e)=>{
        setValue({...value , [e.target.name]:e.target.value})
    }

    const handleOnSubmit = async(e)=>{
        e.preventDefault()
        const data = await fetch('https://portfolioserver-tosr.onrender.com/AdminLogin' , {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(value)
        })

        const res = await data.json()
        if(res.status==="Success"){
            sessionStorage.setItem('token' , res.token)
            setIsUserAuth(true)
            navigate('/AdminPanel')
        }
        console.log(res)
    }
  return (
    <>
     <section className="vh-100" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col col-xl-10">
        <div className="" >
          <div className="row ">

            <div className="col-md-6 col-lg-5  d-md-block">
              <img src={img}
                alt="login form" className="img-fluid"  />
            </div>

            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={handleOnSubmit} method='POST' action='/AdminLogin' >

                  <h3 style={{textAlign:"center"}} className="fw-normal mb-3 pb-3">Login to Your Account</h3>

                  <div className="form-outline mb-4">
                    <input onChange={handleOnChange} type="email" id="form2Example17" required name='email' placeholder='Email' className="form-control form-control-lg" />
                  </div>

                  <div className="form-outline mb-4">
                    <input onChange={handleOnChange} name='password' required type="password" id="form2Example27" placeholder='Password' className="form-control form-control-lg" />
                  </div>

                  <div className="pt-1 mb-4">
                    <button style={{backgroundColor:"black" , border:"solid gray" , color:"white"}} className="btn  btn-lg w-100" type="submit">Login</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 
    </>
  )
}
