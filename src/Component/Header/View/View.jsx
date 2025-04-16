import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link} from "react-router-dom";

function View({ searchTerm }) {
  const [viwevData, setvievData] = useState([]);


  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/user");
      setvievData(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete?")) {
      try {
        await axios.delete(`http://localhost:3000/api/user/${id}`);
        fetchdata(); // refresh after delete
      } catch (error) {
        console.error("Error deleting contact:", error);
      }
    }
  };

  const filteredData = viwevData.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="col-10 p-5">
      <div className="p-1 heading">Contacts</div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((contact) => {
            console.log("Contact:", contact); // ✅ log every contact
            return (
              <tr key={contact._id}>
                <td>
                  <img
                      src={`http://localhost:3000/${contact.image.replace("\\", "/")}`}
                    className="img-1 p-2 rounded-circle"
                    alt="avatar"
                    width="50"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.PhoneNo}</td>
                <td>{contact.Compny}</td>
                <td>
                  <Link to={`/edit/${contact._id}`}>
                    <Button className="mx-2 text-white">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                  </Link>
                  <Button
                    className="mx-2"
                    onClick={() => handleDelete(contact._id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default View;
