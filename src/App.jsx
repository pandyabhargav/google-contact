import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Row,
} from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import View from "./Component/Header/View/View";
import Add from "./Component/Add/Add";
import Edit from "./Component/Edit/Edit";
import Singin from "./Component/Singin/Singin";
import Login from "./Component/Login/Login";
import ProtectedRoute from "./Component/protectedRoutes";


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src="/image/contacts_2022_48dp.png" alt="logo" /> Contacts
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-flex justify-content-between"
          >
            <Form className="d-flex me-3">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </Form>
            <Nav className="ml-auto d-flex align-items-center">
              <Nav.Link href="#!">
                <i className="fa-solid fa-bars p-2"></i>
              </Nav.Link>
              <Nav.Link href="#!">
                <i className="fa-solid fa-gear p-2"></i>
              </Nav.Link>
              <Nav.Link href="#!">
                <i className="fa-solid fa-circle-question p-2"></i>
              </Nav.Link>
              <NavDropdown
                title={
                  <img
                    src={
                      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    }
                    alt="User Profile"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                }
                id="basic-nav-dropdown"
                align="end"
              >
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        <Row>
          <div className="col-12 d-flex flex-wrap">
            <div className="sidebar col-2">
              <div className="m-3">
                <button className="bg-blu p-2">
                  <Link to="/add">
                    <h6 className="p-1">
                      <i className="fa-solid fa-plus "></i> Create Contact
                    </h6>
                  </Link>
                </button>
              </div>
              <div className="m-3">
                <Link to="/">
                  <button className="bg-blu p-2 rounded-pill bt">
                    <h6 className="p-1">
                      <i className="fa-solid fa-user px-3"></i>
                      <span className="px-3">Contacts</span>
                    </h6>
                  </button>
                </Link>
              </div>
            </div>
            <Routes>
              <Route path="/singin" element={<Singin />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <View searchTerm={searchTerm} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/add"
                element={
                  <ProtectedRoute>
                    <Add />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <ProtectedRoute>
                    <Edit />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default App;
