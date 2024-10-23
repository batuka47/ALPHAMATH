import React from 'react';
import parse from 'html-react-parser';

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
      <span className="ml-2 flex justify-center items-center gap-1">{value}. {parse(label)}</span>
    </label>
  );
};

export default RadioButton;
