import React from "react";
import './PrimaryButton.scss'

const PrimaryButton = ({
  value,
} : { 
  value: string;
}) => {
  return (
    <button>
        {value}
    </button>
  );
};

export default PrimaryButton;
