import axios from "axios";
import { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [FormData, SetFormdata] = useState({
    email: "",
    password: "",
  });
  const handleinput = (e) => {
    const { name, value } = e.target;
    SetFormdata((prev) => ({ ...prev, [name]: value }));
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post("http://localhost:3000/auth/login",FormData)
        console.log("token",res.data.token);
        
        localStorage.setItem("token", res.data.token);
        navigate("/");
        console.log("user login");
        alert("user login")
        
    } catch (error) {
        console.error("login failed" ,error)
    }
  };

  return (
    <div className="signin signin-bg col-12 d-flex justify-content-center align-items-center">
      <div className="col-6 p-5 bd bg-white1">
        <div className="col-12">
          <img
            src="\image\google-logo-on-transparent-white-background-free-vector.jpg"
            alt="Google Logo"
          />
        </div>
        <div className="col-12 d-flex flex-wrap">
          <div className="col-6 p-3">
            <h1>Log in</h1>
            <p>Use your Google Account</p>
          </div>
          <div className="col-6">
            <Form onSubmit={handleSignIn} className="col-12">
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  className="m-0"
                  required
                  value={FormData.email}
                  onChange={handleinput}
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="m-0"
                  required
                  value={FormData.password}
                  onChange={handleinput}
                />
              </FloatingLabel>

              <div className="my-3 d-flex justify-content-between">
                <div>
                  <Button
                    variant="primary"
                    className="rounded-pill px-3 ms-1"
                    type="submit"
                  >
                    Log In
                  </Button>
                  {/* Optional: Redirect to signup page */}
                  <Link
                    variant="primary"
                    as={Link}
                    to="/singin"
                    className="px-3"
                    type="button"
                    onClick={() => {
                      /* Add redirect logic */
                    }}
                  >
                    Create account
                  </Link>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
