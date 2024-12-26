const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Route to handle form submission
app.post('/submitForm', (req, res) => {
  const formData = req.body;

  // Read existing data from a JSON file
  fs.readFile('formData.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error reading file' });
    }

    const existingData = data ? JSON.parse(data) : [];
    existingData.push(formData);

    // Write the updated data to the file
    fs.writeFile('formData.json', JSON.stringify(existingData), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error saving form data' });
      }
      res.status(200).json({ message: 'Form data submitted successfully!' });
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});