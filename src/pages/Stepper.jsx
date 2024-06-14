import React from 'react';

const steps = [
  'Step 1: Personal Information',
  'Step 2: Account Details',
  'Step 3: Confirm Information',
  'Step 4: Complete'
];

const Stepper = ({ currentStep }) => {
  return (
    
        <div className="status-bar">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`status-item ${index <= currentStep ? 'completed' : ''}`}
            >
              {step}
            </div>
          ))}
        </div>
  );
};

export default Stepper;
