import React from "react";

const Select = ({
  label,
  name,
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  ...rest
}) => {
  return (
    <div className="select-container">
      {label && (
        <label htmlFor={name}>
          {label} {rest.required && <span className="required">*</span>}
        </label>
      )}
      <select name={name} value={value} onChange={onChange} {...rest}>
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
