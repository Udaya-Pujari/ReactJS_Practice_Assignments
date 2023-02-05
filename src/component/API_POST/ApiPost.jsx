import React from 'react'
import { useState } from 'react'

const ApiPost = () => {

    const[name,setName]=useState("");
    const[description,setDescription]=useState("");

    const saveUser=()=>{
        console.log({name,description})
        let data={name,description}
        fetch("http://localhost:8901/LA",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            // console.log("result is here",result)
            result.json().then((response)=>{
                console.log("response is",response);
            })
        })
    }

  return (
    <>
        <div className='App'>
            <h1>POST API Example</h1>
            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} name='name'/><br></br> <br></br>
            <input type='text' value={description} onChange={(e)=>{setDescription(e.target.value)}} name='description'/><br></br> <br></br>
            <button type='button' onClick={saveUser}>Save New User</button>
        </div>
    </>
  )
}

export default ApiPost