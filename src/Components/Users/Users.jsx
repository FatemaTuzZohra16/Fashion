import React, { useEffect, useState } from 'react'
import Container from '../Layout/Container'
import { useNavigate } from 'react-router'

const Users = () => {
    const navigate =useNavigate()

    const [users, setUsers] = useState([])
    const [name, setName] = useState("")
    const [nameErr, setNameErr] = useState("")
    const [email, setEmail] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [password, setPassword] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    const [message, setMessage] = useState("")
    const [messageErr, setMessageErr] = useState("")
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
    })
    const handleName=((e)=>{
        setName(e.target.value)
        setNameErr("")
    })
    const handleEmail=((e)=>{
        setEmail(e.target.value)
        setEmailErr("")
    })
    const handlePassword=((e)=>{
        setPassword(e.target.value)
        setPasswordErr("")
    })
    const handleMessage = ((e)=>{
        setMessage(e.target.value)
        setMessageErr("")
    })
    const handleSent = (()=>{
        if(!name){
            setNameErr("Please Enter Your Name")
        }else{
            setName("")
        }
        if(!email){
            setEmailErr("Please Enter Your Email")
        } else {
            if(! /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i.test(email)){
            setEmailErr("Invalid Email")
        }else{
            setEmailErr("")
        }
        }
       
         if(!password){
        setPasswordErr("Please Enter Your Password")
    }else{
        setPassword("")
    }
    if(!message){
        setMessageErr("Please Enter Your Message")
    }else{
        setMessage("")
    }
   if(name && email && password && message && !nameErr && !emailErr && !passwordErr && !messageErr){
    alert("Thank you for your submission. we will get back to you soon")
    setName("")
    setEmail("")
    setPassword("")
    setMessage("")
    navigate("/success")
}
    })
   
    return (
        <div>
            <Container>
                <div className='py-[80px]'>
                    <h1 className='font-primary text-[35px] leading-[50px] text-center mb-[50px]'>Showing users by using API</h1>
                    <div className='flex flex-wrap gap-12'>
                        {
                            users.slice(0, 4).map((item) => (
                                <div className='py-10 px-7 shadow-lg'>
                                    <h1 className='font-primary text-[24px] leading-[33px]'>{item.name}</h1>
                                    <p className='text-[16px] leading-[24px] '>{item.phone}</p>
                                    <p className='text-[16px] leading-[24px] '>{item.website}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <h1 className='font-primary text-[25px] leading-[40px] text-center my-[50px]'>Get In Tuch</h1>
                        <div className='w-[600px] mx-auto shadow-lg py-12 px-10 font-primary'>
                            
                            <input type="text"
                                placeholder='Your Name'
                                name='Name'
                                value={name}
                                className='border outline-0 w-full rounded py-4 pl-4 mb-4 border-black/20'
                                onChange={handleName}
                            />
                            <p className='text-red-700 mb-3'>{nameErr}</p>
                            <input type="email"
                                placeholder='Your Email'
                                name='Email'
                                value={email}
                                className='border outline-0 w-full rounded py-4 pl-4 mb-4 border-black/20'
                                onChange={handleEmail}
                            />
                             <p className='text-red-700 mb-3'>{emailErr}</p>
                            <input type="password"
                                placeholder='Your Password'
                                name='Password'
                                value={password}
                                className='border outline-0 w-full rounded py-4 pl-4 mb-4 border-black/20'
                                onChange={handlePassword}
                            />
                             <p className='text-red-700 mb-3'>{passwordErr}</p>
                            <textarea 
                            placeholder='Write Your Message'
                            name='Message'
                            value={message}
                            className='border outline-0 w-full rounded py-4 pl-4 mb-4 border-black/20'
                            onChange={handleMessage}
                            />
                             <p className='text-red-700 mb-3'>{messageErr}</p>
                            <button  onClick={handleSent} className='font-medium text-[30px] leading-[45px] bg-blue-500 text-white py-2 px-10 rounded'>Sent</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Users