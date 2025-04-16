import { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function Singin() {
    const navigate = useNavigate();
  const [formData, SetFormData] = useState({
    Fistname: "",
    email: "",
    password: "",
  });
  const handleinput = (e) => {
    const { name, value } = e.target;
    SetFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/auth/singup",
        formData
      );
      
      console.log("Signup Success:", res.data);
      navigate("/login")
      alert("Signup successful!");
    } catch (error) {
      console.error("Signup error:", error);
      alert("singup falied");
    }
  };
  

  return (
    <div className="signin col-12 signin-bg d-flex justify-content-center align-items-center">
      <div className="col-6 p-5 bd bg-white1">
        <div className="col-12">
          <img
            src="\image\google-logo-on-transparent-white-background-free-vector.jpg"
            alt="Google Logo"
          />
        </div>
        <div className="col-12 d-flex flex-wrap">
          <div className="col-6 p-3">
            <h1>Create a Google Account</h1>
            <p>Enter Your Details</p>
          </div>
          <div className="col-6">
            <Form onSubmit={handleSignUp} className="col-12">
              <FloatingLabel
                controlId="floatingFirstName"
                label="First Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  name="Fistname"
                  required
                  value={formData.Fistname}
                  onChange={handleinput}
                  placeholder="First Name"
                  className="m-0"
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingEmail"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleinput}
                  placeholder="Email address"
                  className="m-0"
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleinput}
                  placeholder="Password"
                  className="m-0"
                />
              </FloatingLabel>
              <div className="my-3 d-flex justify-content-between">
                <div>
                  <Link
                    variant="primary"
                    as={Link}
                    to="/login"
                    className=" px-3"
                  >
                    Log in
                  </Link>
                  <Button
                    variant="primary"
                    className="rounded-pill px-3"
                    type="submit"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singin;
