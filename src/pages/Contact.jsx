import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      purpose: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-body p-md-5">
              <h2 className="text-center mb-4 fw-bold text-col">Contact Us</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="row">
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Purpose</label>
                    <select
                      name="purpose"
                      className="form-select"
                      value={formData.purpose}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Purpose</option>
                      <option value="Admissions">Admissions</option>
                      <option value="General">General</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Careers">Careers</option>
                    </select>
                  </div>
                  <div className="mb-3 col-md-6">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Enter subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button type="submit" className="custom-btn">
                    Send Message
                  </button>
                </div>
                {submitted && (
                  <div
                    className="alert alert-success text-center mt-3"
                    role="alert"
                  >
                    Thank you, we’ll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6 p-5">
          <h1 className="mb-5 text-col">Get in Touch</h1>
          <p>Address:</p>
          <p className="fw-bold fs-4 mb-5">Rajrooppur, Prayagraj</p>
          <p>Email:</p>
          <p className="fw-bold fs-4 mb-5">Balmitra@gmail.com</p>
          <p>Phone</p>
          <p className="fw-bold fs-4 mb-5">1234567890</p>
          <p>Social</p>
          <p className="fw-bold fs-4 mb-5">
            <div className="d-flex">
              <a href="" target="_blank" className="mb-4 me-3">
                <i
                  class="fa-brands fa-instagram profile"
                  style={{ color: "#22335f", fontSize: "2rem" }}
                ></i>
              </a>
              <a href="https://wa.me/" target="_blank" className="me-3">
                <i
                  class="fa-brands fa-whatsapp profile "
                  style={{ color: "#22335f", fontSize: "2rem" }}
                ></i>
              </a>
              <a href="" target="_blank">
                <i
                  class="fa-brands fa-youtube profile"
                  style={{ color: "#22335f", fontSize: "2rem" }}
                ></i>
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
