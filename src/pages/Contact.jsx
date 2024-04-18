import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigate();

  return (
    <div style={{marginLeft: "100px"}}>
    <h1 style={{textAlign: "center"}}>Welcome to the Contact Page</h1>
    
    <h1 style={{color: "#555aa0"}}>This is the Home of React World! You Can React to us What You See on Your Walks of Life!</h1>

      <pre> 
        How can I love thee? My Love! <br />
        My heart aches! <br />
        No way to stay forlone! <br />
        Please take refugee to thee! <br />
      </pre>
{/* pre tag is used for retaining space */}

      <address>
          Written by <a href="mailto:optimismmakesyouhappy@gmail.com" target='_blank'>Jasson De Rose</a> <br />
          Visit us at: <br />
          <a href="https://kobitar-rong.blogspot.com" target='_blank'>kobitar-rong.blogspot.com</a> <br />
          <a href="https://jasson-de-rose.github.io/de-rose-portfolio/" target='_blank'>jasson-de-rose.github.io/de-rose-portfolio</a> <br />
          Sylhet <br />
          Bangladesh 
        </address> <br />

      <button onClick={()=> navigate("/")}>Go to Home Page</button>
  </div>
  )
}

export default Contact
