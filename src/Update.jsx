import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    let {id}=useParams()
    const [data,setData]=useState()
    const [user,setUser]=useState('')

    useEffect(()=>{
        let fetchData=async()=>{

            let response=await axios.get(`http://localhost:4000/findOne/${id}`)
            console.log(response);
            setUser(response.data)
        }
        fetchData()
    },[])

    let handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    
    }
let navigate=useNavigate()

    let handleSubmit=async ()=>{
        let response=await axios.put(`http://localhost:4000/updateOne/${id}`,data)
        console.log(response);
    navigate('/register')


    }
  return (
    <div>
        <input type="" placeholder={user.username} name='username' onChange={handleChange} />
<input type="" placeholder={user.password} name='password' onChange={handleChange} />
<button onClick={handleSubmit}>update</button>

    </div>
  )
}

export default Update