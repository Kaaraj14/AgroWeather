import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = () => {
  // Define state variables to store form data
  const [formData, setFormData] = useState({
    Name: "",
    ContactNo: "",
    email: "",
    Subject: "",
    Message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    setFormData({
      Name: "",
      ContactNo: "",
      email: "",
      Subject: "",
      Message: ""
    })
    

  };

  return (
    <>
    <form onSubmit={handleSubmit} className={styles["form-container"]}>
      <div className={styles["inner-container"]}>
        <div className={styles["form-group"]}>
          <label htmlFor="Name"> Name:</label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            className={styles["input-field"]}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="ContactNo">Contact No.:</label>
          <input
            type="tel"
            id="ContactNo"
            name="ContactNo"
            value={formData.ContactNo}
            onChange={handleChange}
            className={styles["input-field"]}
            maxLength={10}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles["input-field"]}
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="Subject">Subject:</label>
          <input
            type="text"
            id="Subject"
            name="Subject"
            value={formData.Subject}
            onChange={handleChange}
            className={styles["input-field"]}
          />
        </div>
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="Message">Message:</label>
        <textarea
          value={formData.Message}
          onChange={handleChange}
          name="Message"
          rows={3}
          cols={46}
        />
      </div>
      <button type="submit" className={styles["submit-button"]}>
        Submit
      </button>
    </form>
    
    </>
  );
};

export default Form;
