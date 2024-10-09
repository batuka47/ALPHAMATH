import React from 'react';

const RadioButton = ({ label, name, value, checked, onChange }) => {
  return (
    <label className="inline-flex items-center text-lg font-semibold gap-1 ml-12">
      <input 
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="form-radio text-blue-600 h-4 w-4"
      />
      <span className="ml-2">{label}</span>
    </label>
  );
};

export default RadioButton;
