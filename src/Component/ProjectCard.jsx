import React from 'react'
import { useState } from 'react';
import { Card,Modal,Row,Col } from 'react-bootstrap'
import viddeo from '../Assets/viddeo.png'

function ProjectCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
  <>
  <Card className='shadow mb-5 btn' onClick={handleShow}>
      <Card.Img variant="top" src={viddeo} />
      <Card.Body>
        <Card.Title>VIDDEO (Media player)</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>

    <Modal size='ig' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Detials</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
            <img className='img-fluid' style={{height:'200px'}} src={viddeo} alt="project image" />
            </Col>
            <Col md={6}>
            <h2>Project title</h2>
            <p>LOCKIN is a project management web app tailored for developers to showcase, manage, and access their personal or collabor</p>
            <p>Language used: <span className='fw-bold'>HTML,CSS,REACT</span></p>
            </Col>
          </Row>
          <div className='mb-5'>
           <a className='me-5 btn' target='blank' href="https://github.com/imaswin12345/VideoApp"> <i className="fa-brands fa-github fa-2x"></i></a>

           <a className='me-5 btn' target='blank' href="https://melodic-rugelach-91e78d.netlify.app/"> <i class="fa-solid fa-link fa-2x"></i></a>

          </div>

         

        </Modal.Body>
      </Modal>


  </>
  )
}

export default ProjectCard