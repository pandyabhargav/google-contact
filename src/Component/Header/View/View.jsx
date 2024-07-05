import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Edit from '../../Edit/Edit'

function View() {
  return (
    <div className='col-10 p-5'>
                            <div>
                                <div className='p-1 heading'>
                                    Contacts
                                </div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Contact Number</th>
                                            <th>Company</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className=' img-1 p-2 rounded-pill bt' alt="" /> Bhargav</td>
                                            <td>pandyabhargav707@gmail.com</td>
                                            <td>46793431324</td>
                                            <td></td>
                                            <td><Link to={"/edit"}><Button className='mx-2 text-white'><i class="fa-solid fa-pen-to-square"></i></Button></Link> <Button className='mx-2'><i class="fa-solid fa-trash"></i></Button></td>
                                        </tr>
                                        <tr>
                                            <td><img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className=' img-1 p-2 rounded-pill bt' alt="" /> Bhargav</td>
                                            <td>pandyabhargav707@gmail.com</td>
                                            <td>46793431324</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
  )
}

export default View