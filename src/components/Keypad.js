import React from 'react';

function Keypad() {
  // Define an event handler function for the 'change' event
  const handleChange = () => {
    console.log('Entering password...');
  };

  return (
    <div>
      {/* Render an input field with the type 'password' */}
      <input type="password" onChange={handleChange} />
    </div>
  );
}

export default Keypad;
