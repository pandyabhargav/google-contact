import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
  const [form, setform] = useState({
    name: "",
    email: "",
    image: null,
    PhoneNo: "",
    Compny: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setform((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setform((prev) => ({ ...prev, image: file })); // store actual file, not base64
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("PhoneNo", form.PhoneNo); // ✅ fix spelling to match backend
    formData.append("Compny", form.Compny);

    if (form.image) {
      formData.append("image", form.image); // ✅ actual File object
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/user",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        alert("Contact added successfully!");
        navigate("/");
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      alert("There was an issue with the request.");
    }
  };
  return (
    <div className="col-10 p-5">
      <Form onSubmit={handleSubmit}>
        <div className="heading pb-3">
          <h4>Create Contacts</h4>
        </div>

        <div className="mb-3">
          <img
            src={
              form.image
                ? URL.createObjectURL(form.image)
                : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="preview"
            width="100"
          />
          <Form.Control
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <Form.Group className="mb-3 wraper p-2" controlId="formBasicName">
          <i className="fa-solid fa-user"></i>{" "}
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name" // ✅ fixed here
            value={form.name}
            onChange={handleInput}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 wraper p-2" controlId="formBasicEmail">
          <i className="fa-solid fa-envelope"></i>{" "}
          <Form.Control
            type="email"
            name="email"
            value={form.email}
            onChange={handleInput}
            placeholder="Enter Email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 wraper p-2" controlId="formBasicNumber">
          <i className="fa-solid fa-phone"></i>
          <Form.Control
            type="number"
            name="PhoneNo"
            value={form.PhoneNo}
            onChange={handleInput}
            placeholder="Enter Phone Number"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 wraper p-2" controlId="formBasicCompany">
          <i className="fa-solid fa-building"></i>{" "}
          <Form.Control
            type="text"
            name="Compny"
            value={form.Compny}
            onChange={handleInput}
            placeholder="Enter Company"
            required
          />
        </Form.Group>

        <Button variant="primary" className="rounded-pill px-3" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
}

export default Add;
