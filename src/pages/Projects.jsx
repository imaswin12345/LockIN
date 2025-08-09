import React from 'react'
import Header from '../Component/Header'
import { Row,Col } from 'react-bootstrap'
import ProjectCard from '../Component/ProjectCard'
function Projects() {
  return (
    <>
    
   <Header/>

   <div style={{marginTop:"100px"}} className='Projects '>
    <h1 className='text-center mb-5 '>ALL PROJECTS</h1>
    <div className='d-flex justify-content-center align-items-center w-100'>
     <div  className='w-75 d-flex  rounded mb-5 mt-1'>
       <input type="text" className='form-control'  placeholder='SEARCH PROJECTS BY TECHNOLOGIES'/>
      <button className='border btn btn-outline-secondary'><i className="fa-solid fa-magnifying-glass"></i></button>

     </div>
    </div>
    <Row>
      <Col sm={12} md={6} lg={4} className='mt-5 container-fluid'>
      <ProjectCard/>
      </Col>
    </Row>
   </div>


   </>
   
  )
}

export default Projects