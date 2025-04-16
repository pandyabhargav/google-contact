import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    PhoneNo: '',
    Compny: '',
    image: '', // Store existing image filename from backend
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [newImage, setNewImage] = useState(null); // For selected file

  // Fetch data
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/user/${id}`);
        setFormData(res.data);
        setPreviewImage(`http://localhost:3000/${res.data.image}`);
      } catch (error) {
        console.error('Error fetching contact:', error);
      }
    };

    fetchContact();
  }, [id]);

  const handleChange = (e) => {
    const {name,value} = e.target
    setFormData({
      ...formData,
      [name]:value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImage(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('PhoneNo', formData.PhoneNo);
      data.append('Compny', formData.Compny);
      if (newImage) {
        data.append('image', newImage);
      }

      await axios.put(`http://localhost:3000/api/user/${id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('Contact Updated Successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  return (
    <div className='col-10 p-5'>
      <Form onSubmit={handleSubmit}>
        <div className='heading pb-3'>
          <h4> Update Contact</h4>
        </div>

        <div className="mb-3">
          <img
            src={previewImage || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
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
          <i className="fa-solid fa-user"></i>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 wraper p-2" controlId="formBasicEmail">
          <i className="fa-solid fa-envelope"></i>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 wraper p-2" controlId="formBasicNumber">
          <i className="fa-solid fa-phone"></i>
          <Form.Control
            type="tel"
            name="PhoneNo"
            value={formData.PhoneNo}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3 wraper p-2" controlId="formBasicCompany">
          <i className="fa-solid fa-building"></i>
          <Form.Control
            type="text"
            name="Compny"
            value={formData.Compny}
            onChange={handleChange}
            placeholder="Enter Company"
            required
          />
        </Form.Group>

        <Button variant="primary" className='rounded-pill px-3' type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Edit;
