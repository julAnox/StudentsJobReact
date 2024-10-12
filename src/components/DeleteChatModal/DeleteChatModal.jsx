import React from "react";
import "./DeleteChatModal.css";

const DeleteChatModal = ({ isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Are you sure you want to delete this chat?</h3>
        <div className="modal-actions">
          <button onClick={onDelete} className="confirm-btn">
            Delete
          </button>
          <button onClick={onClose} className="cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteChatModal;
