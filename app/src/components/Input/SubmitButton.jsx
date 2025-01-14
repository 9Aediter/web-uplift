import React from 'react';

const SubmitButton = ({ label }) => {
  return (
    <button type="submit" className="w-full btn btn-primary">
      {label}
    </button>
  );
};

export default SubmitButton;
