import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Add() {
  return (
    <>
           <div className='col-10 p-5'>
                        <Form>
                            <div className=' heading pb-3'>
                                Create Contacts
                            </div>
                            <div className='rounded-circle profile-img'>
                                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                                <button variant="primary" className='rounded-circle img-add' >+</button>
                            </div>
                            <Form.Group className="mb-3 wraper p-2" controlId="formBasicName">
                            <i class="fa-solid fa-user"></i> <Form.Control type="Name" placeholder="     Enter Name" />
                            </Form.Group>

                            <Form.Group className="mb-3 wraper p-2" controlId="formBasicName">
                            <i class="fa-solid fa-envelope"></i> <Form.Control type="email" placeholder= "     Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 wraper p-2" controlId="formBasicNumber">    
                            <i class="fa-solid fa-phone"></i><Form.Control type="Number" placeholder="     Enter Number" />
                            </Form.Group>

                            <Form.Group className="mb-3 wraper p-2" controlId="formBasicName">    
                            <i class="fa-solid fa-building"></i> <Form.Control type="Name" placeholder="     Company" />
                            </Form.Group>

                            <Button variant="primary" className='rounded-pill px-3' type="submit">
                                Save
                            </Button>
                        </Form>
                        </div>
                        
    </>
  )
}

export default Add;