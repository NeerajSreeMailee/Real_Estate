import React, { useState } from 'react';

const BookCallComponent = () => {
  // State to track the selected option (Zoom Call or Queries)
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedDetails, setSelectedDetails] = useState('');
  
  // Data for Zoom Calls and Queries
  const zoomCalls = [
    { id: 1, title: 'General Meeting', details: 'Duration: 30 mins, Link: Zoom.com/meeting' },
    { id: 2, title: 'Technical Discussion', details: 'Duration: 45 mins, Link: Zoom.com/tech' },
    { id: 3, title: 'Client Consultation', details: 'Duration: 60 mins, Link: Zoom.com/client' },
  ];
  
  const queries = [
    { id: 1, title: 'Billing Issues', details: 'Contact billing@company.com for assistance' },
    { id: 2, title: 'Technical Support', details: 'Email support@company.com for troubleshooting' },
    { id: 3, title: 'Account Issues', details: 'Reach out to help@company.com for account-related queries' },
  ];

  // Handler to manage the selection of option (Zoom Call or Queries)
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedDetails(''); // Reset the details when changing the option
  };

  // Handler to manage the details selection based on the option
  const handleDetailsChange = (event) => {
    const selectedId = event.target.value;
    if (selectedOption === 'zoomCall') {
      setSelectedDetails(zoomCalls.find((call) => call.id === parseInt(selectedId)).details);
    } else if (selectedOption === 'queries') {
      setSelectedDetails(queries.find((query) => query.id === parseInt(selectedId)).details);
    }
  };

  return (
    <div className="book-call-component px-4 sm:px-8 md:px-16 py-8">
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-8">
        Book a Call or Query
      </h2>

      <div className="space-y-6">
        {/* First dropdown for selecting between Zoom Call or Queries */}
        <div className="mb-6">
          <label htmlFor="option" className="block text-lg sm:text-xl mb-2">Select Option</label>
          <select
            id="option"
            value={selectedOption}
            onChange={handleOptionChange}
            className="w-full sm:w-80 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">-- Select Option --</option>
            <option value="zoomCall">Zoom Call</option>
            <option value="queries">Queries</option>
          </select>
        </div>

        {/* Second dropdown to select Zoom Call or Queries details based on first dropdown */}
        {selectedOption && (
          <div className="mb-6">
            <label htmlFor="details" className="block text-lg sm:text-xl mb-2">Select Details</label>
            <select
              id="details"
              value={selectedDetails}
              onChange={handleDetailsChange}
              className="w-full sm:w-80 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">-- Select {selectedOption === 'zoomCall' ? 'Zoom Call' : 'Query'} --</option>
              {(selectedOption === 'zoomCall' ? zoomCalls : queries).map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Display selected details */}
        {selectedDetails && (
          <div className="details mt-6">
            <h3 className="text-lg sm:text-xl font-semibold">Details:</h3>
            <p className="text-gray-600">{selectedDetails}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCallComponent;