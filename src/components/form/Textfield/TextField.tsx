import React from "react";

const TextField = ({
  type,
  placeholder,
} : { 
  type: string;
  placeholder: string;
}) => {
  return (
    <label>
      <input
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
};

export default TextField;
