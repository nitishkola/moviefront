import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config'

const FetchRegistrations = () => {
    const [res, setRes] = useState([]);
    const [formData,setFormData]=useState({name:'',role:'',email:'',password:''})

 const fetchData= async()=>{ 
        axios.get(`${config.url}/retrieve`, )
            .then(response => {
                setRes(response.data);
                console.log(response.data);
            })}
            useEffect(()=>{
                fetchData();
            
    }, 
    [])
const updateData=async (id)=>{ 
const res=await axios.put(`${config.url}/users/${id}`,formData)
fetchData()
console.log(res.data)
    
}
const handleDelete = async (id)=>{
  await axios.delete(`${config.url}/users/${id}`)
  .then((response)=>{
    console.log(response.data)
  })
  fetchData()
}
const changeHandler=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
};
const backgroundImageStyle = {
    // backgroundImage: `url('./Images/bg1.png')`,
    backgroundColor: "#FFFAF0",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Adjust as needed
    padding: '20px' // Add padding to center content
  };

    return (
        <div style={backgroundImageStyle}>
        <center>
            <h1>SignUp Details</h1>
        <table border={1}>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Role</th>
                    
                    <th>Email</th>
                    <th>Password</th>
                </tr>
                {res.map((item,index) =>{
                    return(
                        <tr key={index}>
                          <td>{item._id}</td>
                          <td>{item.name}</td>
                          <td>{item.role}</td>
                         
                          <td>{item.email}</td>
                          <td>{item.password}</td>
                        <td>
                           
                            <input type='text' name='name' placeholder='New Name' onChange={changeHandler}/>
                            <input type='text' name='role' placeholder='New Role' onChange={changeHandler}/>
                            <input type='text' name='email' placeholder='New Email' onChange={changeHandler}/>
                            <input type='password' name='password' placeholder='New Password' onChange={changeHandler}/>
                            <button onClick={()=>updateData(item._id)}>update</button>
                            <button onClick={()=>handleDelete(item._id)}>Delete</button>
                        </td>
                    </tr>
                    )
                })}           
        </table>
        </center>
        </div>
    );
};

export default FetchRegistrations;
