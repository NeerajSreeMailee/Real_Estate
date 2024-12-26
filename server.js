// server.js (or app.js)

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/bookCallDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the schema for the form data
const FormDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  location: String,
  query: String,
  callType: String,
  details: String,
  timeSlot: String,
});

// Create a model for form data
const FormData = mongoose.model('FormData', FormDataSchema);

// Route to handle form submission
app.post('/submitForm', async (req, res) => {
  const { name, email, phone, location, query, callType, details, timeSlot } = req.body;

  try {
    const formData = new FormData({
      name,
      email,
      phone,
      location,
      query,
      callType,
      details,
      timeSlot,
    });

    await formData.save();
    res.status(200).json({ message: 'Form data submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving form data' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});