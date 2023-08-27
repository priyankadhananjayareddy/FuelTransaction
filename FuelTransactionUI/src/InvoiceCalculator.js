import React, { useState } from 'react';
import './InvoiceCalculator.css';

const InvoiceCalculator = () => {
  const [gallonCapacity, setGallonCapacity] = useState('');
  const [noOfGallonsInVehicle, setNoOfGallonsInVehicle] = useState('');
  const [invoice, setInvoice] = useState(null);

  const calculateInvoice = () => {
    fetch('http://localhost:9092/invoice/receiptResponse', {  // Replace with your actual backend URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        gallonCapacity: parseFloat(gallonCapacity),
        noOfGallonsInVehicle: parseFloat(noOfGallonsInVehicle),
      }),
    })
      .then(response => response.json())
      .then(data => setInvoice(data))
      .catch(error => console.error('Error calculating invoice:', error));
  };

  return (
    <div className="invoice-calculator">
      <h1>Invoice Calculator</h1>
      <div className="input-container">
        <label htmlFor="gallonCapacity">Gallon Capacity:</label>
        <input
          type="number"
          id="gallonCapacity"
          value={gallonCapacity}
          onChange={e => setGallonCapacity(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="noOfGallonsInVehicle">No. of Gallons in Vehicle:</label>
        <input
          type="number"
          id="noOfGallonsInVehicle"
          value={noOfGallonsInVehicle}
          onChange={e => setNoOfGallonsInVehicle(e.target.value)}
        />
      </div>
      <button onClick={calculateInvoice}>Calculate Invoice</button>
      {invoice && (
        <div className="invoice-details">
          <h2>Invoice Details</h2>
          <p>Date: {invoice.date}</p>
          <p>Price per Gallon: ${invoice.pricePerGallon}</p>
          <p>No. of Gallons to Be Filled: {invoice.noOfGallonsToBeFilled} gallons</p>
          <p>Total Price: ${invoice.totalPrice}</p>
        </div>
      )}
    </div>
  );
};

export default InvoiceCalculator;
