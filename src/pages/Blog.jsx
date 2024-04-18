import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { blogsData } from '../data';

const Blog = () => {

    const {title} = useParams();
    const [bodyData, setBodyData] = useState("");

    useEffect(()=>{
       const blogData = blogsData.filter((blog)=> blog.title === title);
       setBodyData(blogData[0].body);
    })

  return (
    <div style={{margin: "50px"}}>
      <h1>{title} PAGE</h1>
      <p>{bodyData.slice(0,500)}</p>
      <p>{bodyData.slice(501,1500)}</p>
    </div>
  )
}

export default Blog
