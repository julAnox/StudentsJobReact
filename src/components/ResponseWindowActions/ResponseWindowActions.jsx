import React from "react";
import "./ResponseWindowActions.css";

const ResponseWindowActions = ({
  onSubmit,
  onClose,
  isAnimating,
  isSubmitDisabled,
}) => {
  return (
    <div className="response-window-actions">
      <button
        className="submit-button-response-window"
        onClick={onSubmit}
        disabled={isAnimating || isSubmitDisabled}
      >
        Submit
      </button>
      <button
        className="close-button-response-window"
        onClick={onClose}
        disabled={isAnimating}
      >
        Close
      </button>
    </div>
  );
};

export default ResponseWindowActions;
