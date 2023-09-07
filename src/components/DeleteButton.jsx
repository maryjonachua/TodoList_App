import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

const DeleteButton = ({ handleDeleteClick }) => {
  return (
    <>
      <button onClick={handleDeleteClick} className="deleteBtn">
        <TrashIcon className="delete-icon" />
      </button>
    </>
  );
};

export default DeleteButton;
