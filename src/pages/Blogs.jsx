import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { blogsData } from '../data';

const Blogs = () => {

  const [blogs, setBlogs] = useState(blogsData);
  
  const navigate = useNavigate();

  const truncateString = (str, num)=>{
     if (str.length > num) {
      return str.slice(0, num) + "...";
     } else {
      return str;
     }
  }

  return (
    <div style={{margin: "50px 100px"}}>
    <h1 style={{textAlign: "center"}}>Welcome to the Blog Page</h1>    
    <h1 style={{color: "#555aa0"}}>This is the Home of React World! You Can React to us What You See on Your Life!</h1>

    <section>
      {blogs.map((blog)=> {
        const {id,title,body} = blog;
        return <article key={id}>
            <h3>{title}</h3>
            <p>{truncateString(body,100)}</p>
            <Link to={title}>Learn More</Link>
        </article>
      })}
    </section><br/>


      
      <button onClick={()=> navigate("/")}>Go to Home Page</button>
  </div>
  )
}

export default Blogs
