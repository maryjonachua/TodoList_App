import React from "react";
import { PencilIcon } from "@heroicons/react/24/solid";

const EditButton = ({ handleEditClick }) => {
  return (
    <>
      <button onClick={handleEditClick} className="editBtn">
        <PencilIcon className="edit-icon" />
      </button>
    </>
  );
};

export default EditButton;
