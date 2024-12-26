const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Collect all form data
    const formData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      query: formData.query,
      callType,
      details,
      timeSlot,
    };
  
    try {
      // Send data to the backend server
      const response = await fetch('http://localhost:5000/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Form submitted successfully');
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };
  
  // Inside your JSX, call handleFormSubmit on form submission:
  <form onSubmit={handleFormSubmit} className="space-y-6">
    {/* Form fields here */}
    <div className="flex justify-center mt-6">
      <button
        type="submit"
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
        disabled={!details}
      >
        Submit Request
      </button>
    </div>
  </form>