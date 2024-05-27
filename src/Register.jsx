import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const [data,setData]=useState()
    const [users,setUsers]=useState([])
    const [refresh,setRefresh]=useState(true)

useEffect(()=>{
    let fetchdata=async()=>{
        let response=await axios.get('http://localhost:4000/view')
        console.log(response);
        setUsers(response.data)
    }
    fetchdata()
},[refresh])

let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})

}
let handleSubmit=async()=>{
    let response=await axios.post('http://localhost:4000/register',data)
    console.log(response);
    setRefresh(!refresh)


}
let handleDelete=async (id)=>{
    console.log(id);
    let response=await axios.delete(`http://localhost:4000/deleteData/${id}`) 
    console.log(response);
    setRefresh(!refresh)
}
  return (
    <div>
<input type="" name='username' onChange={handleChange} />
<input type="" name='password' onChange={handleChange} />
<button onClick={handleSubmit}>ADD</button>

<div>
    {users.map((item)=>(
<>
<h2>Username: {item.username}</h2>
<h2>Password : {item.password}</h2>
<h2>Password : {item._id}</h2>
<button onClick={()=>handleDelete(item._id)}>delete</button>
<Link to={`/update/${item._id}`}><button>update</button></Link>
</>
    ))}
</div>

    </div>
  )
}

export default Register