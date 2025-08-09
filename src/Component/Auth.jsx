import React from 'react'
import { Link } from 'react-router-dom'
import Log from '../Assets/Login11.png'
import { Form } from 'react-bootstrap'


function Auth({register}) {
  const isRegisterForm = register? true:false
  return (
    <div style={{width:"100%", height:"100vh"}} className='d-flex justify-content-center align-items-center'>

   <div className='w-75 container'>
    <Link to={'/'} style={{textDecoration:"none"}}><i className="fa-solid fa-arrow-left"></i> Back to  Home  </Link>
   <div className='card shadow p-5 bg-success'>
    <div className='row align-items-center'>
      <div className='col-lg-6'>
        <img src={Log} alt="" style={{height:"300px" , width:"300px"}}/>

      </div>

      <div className='col-6'>
        <div className='d-flex align-items-center justify-center-content flex-column mt-3'>
          <h1 className='fw-bolder text-light mt-4 '><img src="./Box.png" alt="logo"
        style={{ 
        width: '70px',  
        height: 'auto', 
        marginRight: '5px' }} ></img>LOCK-IN</h1>

          <h5 className='mt-3 fw-bolder text-dark pb-3'>
            {
              isRegisterForm ? 'Sign up to your Account':'Sign in to your Account' 
            }
          </h5>

          <Form className='text-light w-100'>

            {
              isRegisterForm && 

                 <Form.Group className="mb-3" controlId="formBasicName">
                 <Form.Control type="text" placeholder="Enter Username" />
        
                 </Form.Group>
            }
                
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Control type="email" placeholder="Enter Email" />
        
                 </Form.Group>


                 
                 <Form.Group className="mb-3" controlId="formBasicpaswd">
                 <Form.Control type="password" placeholder="Enter Password" />
        
                 </Form.Group>

                 {
                  isRegisterForm ?

                  <div className='mb-2'>
                    <button className='btn btn-primary mb-2'> Register</button>
                    <p className='fw-bolder'>Already User ? Click here to <Link style={{textDecoration:"none"}} to={'/login'}>Log in</Link></p>
                  </div> :

                  <div className='mb-2'>
                    <button className='btn btn-primary mb-2'> Log in</button>
                    <p className='fw-bolder'>New User ? Click here to <Link style={{textDecoration:"none"}} to={'/register'}>Register</Link></p>

                  </div>
                 }

          </Form>
        </div>
      </div>

    </div>
    

   </div>
   </div>

    </div>
  )
}

export default Auth