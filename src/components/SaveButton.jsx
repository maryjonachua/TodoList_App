import React from "react";

export const SaveButton = ({ handleSaveClick }) => {
  return (
    <>
      <button className="saveBtn" onClick={handleSaveClick}>
        Save
      </button>
    </>
  );
};
