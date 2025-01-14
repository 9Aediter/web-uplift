import React from 'react';

const InputBlock = ({ label, type, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full input input-bordered"
      />
    </div>
  );
};

export default InputBlock;
