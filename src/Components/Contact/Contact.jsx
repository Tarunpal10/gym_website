import React, { useState } from 'react'
import './Contact.scss'

function Contact() {
  // form validation
  const [name, setName]= useState("")
  const [telephone, setTelephone]= useState("")
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [query, setQuery]= useState("")
  const [errors, setErrors]= useState({})



  // form handling
  const [formData, setFormData]= useState({
    username:"",
    telephone:"",
    email:"",
    password:"",
    query:""
  })
  const handleChange=(event)=>{
    const {name , value, type, checked}= event.target
    const fieldvalue = type ==='checkbox'? checked :value;
    setFormData({
      ...formData,
      [name]:fieldvalue
    })
  }
  const handlesubmit= (event)=>{
      event.preventDefault();
      console.log('formData',formData)
  }
  // main function
  return (
    <>
       <div className="heading">
        <h1>Contact Us</h1>
        <form onSubmit={handlesubmit}>
          <div>
            <input type="text" id='username' name='username'  placeholder='Enter Your Name' value={formData.username} onChange={handleChange} required/>
          </div>
          <div>  
            <input type="telephone" name="telephone" id="telephone" placeholder='+91 4561239635' 
            value={formData.telephone} onChange={handleChange} required/>
          </div>
          <div>
            <input type="email" name="email" id="email" placeholder=' Email: pal900@gmail.com'
            value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <input type="password" name="password" id="password" placeholder=' Enter Password :' 
            value={formData.password} onChange={handleChange} required/>
          </div>
          <div>
            <textarea name="query" id="query" rows={7} cols={50} placeholder=' Ask A  Query :' value={formData.query} onChange={handleChange}></textarea>
          </div>
          <button type='submit'>Submit</button>

        </form>
       </div>
    </>
  )
}

export default Contact
