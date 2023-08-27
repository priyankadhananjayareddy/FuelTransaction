import React from 'react';
import './App.css'; // You can also import your app's CSS if needed
import InvoiceCalculator from './InvoiceCalculator'; // Import the InvoiceCalculator component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fuel Transaction Calculator App</h1>
      </header>
      <main>
        <InvoiceCalculator /> {/* Include the InvoiceCalculator component */}
      </main>
    </div>
  );
}

export default App;
