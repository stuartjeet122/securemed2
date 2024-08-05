import REACT from 'react';
import React, { useState } from 'react';

const Appointment = () => {
  const [patientName, setPatientName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [reason, setReason] = useState('');

  const [patientid, setPatientid] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const styles = {
    body:{
        backgroundColor: '#f5f5f5',
        fontFamily: 'Arial, sans-serif',
      },
    h1: {
      color: "#6366f1",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: '24px',
    },
    container: {
      marginTop: "10px",  
      width: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginBottom: '10px',
      fontWeight: 'bold',
    },
    input: {
      padding: '8px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    textarea: {
      padding: '8px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      resize: 'vertical',
    },
    submitButton: {
      padding: '10px 20px',
      backgroundColor: '#4caf50',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.h1}>Patient Appointment Form</h1>

        <form onSubmit={handleSubmit} style={styles.form}>
          <label htmlFor="patient_name" style={styles.label}>Patient Name:</label>
          <input
            type="text"
            id="patient_name"
            name="patient_name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
            style={styles.input}
          /><br /><br />

          <label htmlFor="appointment_date" style={styles.label}>Appointment Date:</label>
          <input
            type="date"
            id="appointment_date"
            name="appointment_date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
            style={styles.input}
          /><br /><br />

          <label htmlFor="appointment_time" style={styles.label}>Appointment Time:</label>
          <input
            type="time"
            id="appointment_time"
            name="appointment_time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
            style={styles.input}
          /><br /><br />

          <label htmlFor="reason" style={styles.label}>Appointment Description</label><br />
          <textarea
            id="reason"
            name="reason"
            rows="4"
            cols="50"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
            style={styles.textarea}
          ></textarea><br /><br />

          <input type="submit" value="Submit" style={styles.submitButton} />
        </form>
      </div>
      <br />
      <div style={styles.container}>
      <h1 style={styles.h1}>View Appointment</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
          <label htmlFor="patient_id" style={styles.label}>Patient ID:</label>
          <input
            type="text"
            id="patient_id"
            name="patient_id"
            value={patientid}
            onChange={(e) => setPatientid(e.target.value)}
            required
            style={styles.input}
          /><br /><br />
          <input type="submit" value="View" style={styles.submitButton} />
        </form>      
    </div>
    </div>
  );
};

export default Appointment;
