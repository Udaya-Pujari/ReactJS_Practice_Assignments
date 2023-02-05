import React from 'react'

const ApiGet = () => {
    fetch("http://localhost:3000/Languages").then((result)=>{
        result.json().then((response)=>{
            console.log(response)
        })
    })
  return (
    <div>ApiGet</div>
  )
}

export default ApiGet