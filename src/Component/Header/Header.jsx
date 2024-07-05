
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Add from '../Add/Add';


function NavScrollExample() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#" className='px-3'><img src="image\contacts_2022_48dp.png" alt="logo" /> Contacts</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2 inpu"
                                aria-label="Search"
                            />
                        </Form>
                        <div className='icons'>
                            <i className="fa-solid fa-bars"></i>
                            <i className="fa-solid fa-gear"></i>
                            <i className="fa-solid fa-circle-question"></i>

                            <div className='rounded-circle profile px-3 d-flex justify-content-end'>
                                <h5><img src="" alt="" /> </h5>
                            </div>
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container fluid>
                <Row>
                    <div className='col-12 d-flex flex-wrap'>
                        <div className='sidebar col-2'>
                            <div className='m-3'>
                                <button className='bg-blu p-2'>
                                    <h6 className='p-1'>
                                        <i class="fa-solid fa-plus "></i> Create Contact
                                    </h6>
                                </button>
                            </div>
                            <div className='m-3'>
                                <button className='bg-blu p-2 rounded-pill bt'>
                                    <h6 className='p-1'>
                                        <i class="fa-solid fa-user px-3"></i><span className='px-3'>Contacts</span>
                                    </h6>
                                </button>
                            </div>
                        </div>
                        {/* <View/> */}
                     <Add/>
                    </div>

                </Row>
            </Container>
        </>

    );
}

export default NavScrollExample;