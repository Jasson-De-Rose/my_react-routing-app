//finding and getting data from and on url using useSearchParams hook

import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const User = () => {

    const {userid} = useParams(); // this is for using useParams hook for route parameter

    const [searchParams, setSearchParams] = useSearchParams();

    // useState hook is used to store data. for example, handling form data
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit =(e)=>{
       e.preventDefault();
       setSearchParams({name: name, age: age});
    
    }
  return (
    <div>
     <h1>User Info</h1>

     <h2>{userid}</h2>  // this is for using useParams hook for route parameter

     <form action="" onSubmit={handleSubmit}>

        <input type="text" value={name} placeholder='name' onChange={(e)=>{
                setName(e.target.value)
        }} />
        <input type="number" value={age} placeholder='age' onChange={(e)=>{
                setAge(e.target.value)
        }} />

        <button type='submit'>Find User</button>
     </form>

      <h1>{searchParams.get("id")}</h1>
      <h1>{searchParams.get("name")}</h1>
      <h1>{searchParams.get("age")}</h1>
    
      
      
    </div>
  )
}

export default User


{/* <h2>{userid}</h2> // this is for using useParams hook for route parameter */}