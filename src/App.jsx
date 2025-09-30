import React, { useState } from "react";

function CollegeAdmissionForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    admissionType: "",
    comments: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, phone, course, admissionType, comments } = formData;
    if (!fullName || !email || !phone || !course || !admissionType || !comments) {
      alert("Please fill all the fields!");
      return;
    }

    alert(`Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Course: ${course}
Admission Type: ${admissionType}
Comments: ${comments}`);
  };

  const handleClear = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      course: "",
      admissionType: "",
      comments: ""
    });
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    fontSize: "14px"
  };

  const buttonStyle = {
    padding: "12px 25px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
    transition: "0.3s"
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #1c021cff 0%, #649af9ff 100%)",
      fontFamily: "Arial, sans-serif",
      padding: "20px"
    }}>
      <div style={{
        maxWidth: "500px",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "15px",
        padding: "40px 30px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        position: "relative"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "25px", color: "#333" }}>College Admission Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label>Course:</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select a course</option>
              <option value="B.Tech">B.Tech</option>
              <option value="B.Sc">B.Sc</option>
              <option value="B.Com">B.Com</option>
              <option value="MBA">MBA</option>
            </select>
          </div>
          <div>
            <label>Admission Type:</label>
            <select
              name="admissionType"
              value={formData.admissionType}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="">Select admission type</option>
              <option value="Regular">Regular</option>
              <option value="Management Quota">Management Quota</option>
              <option value="Scholarship">Scholarship</option>
            </select>
          </div>
          <div>
            <label>Comments:</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              style={{ ...inputStyle, height: "80px" }}
              placeholder="Any additional information..."
            />
          </div>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              type="submit"
              style={{ ...buttonStyle, backgroundColor: "#4CAF50", color: "white", marginRight: "10px" }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#45a049"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#4CAF50"}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleClear}
              style={{ ...buttonStyle, backgroundColor: "#f44336", color: "white" }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#da190b"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#f44336"}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function App() {
  return (
    <CollegeAdmissionForm />
  );
}

export default App;
