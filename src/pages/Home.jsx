import React from 'react'
import { Row,Col } from 'react-bootstrap'
import dev2 from '../Assets/DEVD.png'
import ProjectCard from '../Component/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    {/* Landing page */}
    <div style={{width:"100%",height:"100vh",backgroundColor:"White"}} className='container-fluid rounded'>

      <Row className='align-items-center p-5'>

        <Col sm={12} md={6}>
        <h1 style={{fontSize:"30px"}}><img src="./Box.png" alt="logo"
        style={{ 
        width: '40px',  
        height: 'auto', 
        marginRight: '5px' }} ></img>LOCK-IN</h1>
       
        <p>LOCKIN is a project management web app tailored for developers to showcase, manage, and access their personal or collaborative projects efficiently. It supports full CRUD functionality, making it ideal for organizing tasks, tracking progress, and maintaining a clean workflow</p>
        <button className='btn btn-danger'>Explore</button>
        
         </Col>
         <Col sm={12} md={6}>
          <img src={dev2} alt="" />
         </Col>

        
      </Row>

    </div>

    {/* all projects */}

    <div className='all-projects mt-5'>
      <h1 className='text-center mb-5'>Explore Our Projects</h1>
    <marquee scrollAmount={10} behavior="" direction="">
      <div className='d-flex justify-content-between'>
        <div style={{width:"500px", marginLeft:"50px",marginRight:"80px"}}> 
           <ProjectCard/>
        </div>

        <div style={{width:"500px",marginRight:"80px"}}> 
           <ProjectCard/>
        </div>

        <div style={{width:"500px",marginRight:"80px"}}> 
           <ProjectCard/>
        </div>
      </div>
    </marquee>

    <div className='text-center mt-5' style={{textDecoration:"none"}}>
      <Link to={'/projects'}>View More Projects</Link>
    </div>

    </div>
    </>
  )
}

export default Home