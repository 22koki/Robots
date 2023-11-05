import React from "react";

function DeleteButton({ onDelete }) {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <button className="delete-button" onClick={handleDelete}>
      X
    </button>
  );
}

export default DeleteButton;
