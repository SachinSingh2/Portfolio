import React, { useEffect, useState } from 'react'
import '../css/Admin.css'

export default function AdminPanel() {

const [data , setdata ] = useState()
const [counter , setCounter] = useState(1)
const [loading , setloading] = useState(false)


useEffect(()=>{
  const getUsers = async()=>{
    const token = sessionStorage.getItem('token')
    setloading(true)
    const data = await fetch('https://portfoliobackend-xzq9.onrender.com/GetAllUser' , {
      method:"GET",
      headers:{
        authorization : token
      }
    })
    const res = await data.json()
    setloading(false)
    if(res.status==="Success"){
      setdata(res.data)
      // setCounter(counter+1)
    }
    console.log(res)
  }
  getUsers()
},[counter])


const handleOnFilter = async(by)=>{
  const token = sessionStorage.getItem('token')
  setloading(true)
  const data = await fetch(`https://portfoliobackend-xzq9.onrender.com/FilterData/${by}` , {
    method:"GET",
    headers:{
      authorization : token
    }
  })
  const res = await data.json()
  setloading(false)
  if(res.status==="Success"){
    setdata(res.data)
  }
}



// ---------HandleOnDelete
const handleOnDelete = async(id)=>{
  try {
    const token = sessionStorage.getItem('token')
    console.log(id)
    const data =await fetch(`https://portfoliobackend-xzq9.onrender.com/DeleteUser/${id}` , {
      method:"DELETE",
      headers:{
        authorization : token
      }
    })
    const res = await data.json()
    if(res.status==="Success"){
      setCounter(counter+1)
    }
  } catch (error) {
    console.log(error.message)
  }
}

  return (
    <>


    <div className="container  ">

  <div style={{textAlign:"end"}} className="FilterBox  p-3">
<div className="dropdown">
<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Filter
</button>
<ul className="dropdown-menu">
<li onClick={()=>{handleOnFilter('asc')}} style={{cursor:"pointer" , backgroundColor:"white" , color:"black"}} className='p-2 ' >Newest</li>
<li onClick={()=>{handleOnFilter("desc")}}  style={{cursor:"pointer" , backgroundColor:"white" , color:"black"}} className='p-2 ' >Oldest</li>
</ul>
</div>

</div>

      <div className="row">

        {loading ? <div style={{textAlign:"center"}} > <i className="fa-solid fa-spinner fa-6x fa-spin" style={{color: "white"}}></i>  </div> : data && data.length > 0  ? data.map((data)=>{
          return <div className='col-md-6 border my-3 py-2 px-3' key={data._id}> 
          <p style={{ wordWrap: "break-word" }} >Name : {data.name}</p>
          <p style={{ wordWrap: "break-word" }} >Email : {data.email}</p>
          <p style={{ wordWrap: "break-word" }} > Contact : {data.contact}</p>
          <p style={{ wordWrap: "break-word" }} >Service : {data.service}</p>
          <p style={{ wordWrap: "break-word" }} >Message : {data.message}</p>
          <p style={{ wordWrap: "break-word" }} >Time : {data.Time}</p>
          <p style={{ wordWrap: "break-word" }} >Date : {data.Date}</p>

          {loading ? <i className="fa-solid fa-spinner fa-2x fa-spin" style={{color: "white"}}></i> : <i onClick={()=>{handleOnDelete(data._id)}} class="fa-solid fa-trash fa-2x" style={{color: "white"}}></i>}
          
          </div>
        }) : <h1 style={{textAlign:"center" , marginTop:"100px"}} >No Data Available</h1>} 

      </div>
    </div>
    </>
  )
}
