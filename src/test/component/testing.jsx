import React from "react";

const Testing = () => {
  return (
    <>
      <input
        aria-label="Has Error"
        aria-invalid="true"
        aria-errormessage="error-message"
      />
      <div id="error-message" role="alert">
        This field is invalid
      </div>

      <input aria-label="No Error Attributes" />
      <input
        aria-label="Not Invalid"
        aria-invalid="false"
        aria-errormessage="error-message"
      />
    </>
  );
};

export default Testing;
