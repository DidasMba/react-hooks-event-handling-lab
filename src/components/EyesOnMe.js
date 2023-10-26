// Code EyesOnMe Component Here
import React from 'react';

function EyesOnMe() {
  // Define event handler functions for the 'focus' and 'blur' events
  const handleFocus = () => {
    console.log('Good!');
  };

  const handleBlur = () => {
    console.log('Hey! Eyes on me!');
  };

  return (
    <div>
      {/* Render a button with 'Eyes on me' text, and add event handlers */}
      <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
    </div>
  );
}

export default EyesOnMe;
