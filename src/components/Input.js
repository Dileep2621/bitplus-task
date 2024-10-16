import React from "react";

const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  ...rest
}) => {
  return (
    <div className="input-container">
      {label && (
        <label htmlFor={name}>
          {label}
          {rest.required && <span className="required">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

export default Input;
