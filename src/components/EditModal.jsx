import React from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const EditModal = ({
  show,
  onClose,
  onUpdate,
  title,
  setTitle,
  description,
  setDescription,
}) => {
  if (!show) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return createPortal(
    <div
      className="fixed inset-0 backdrop-blur-sm backdrop-brightness-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full border border-green-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            placeholder="Task Title"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            placeholder="Task Description"
            rows={4}
          />
          <Button
            onClick={onUpdate}
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Update
          </Button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default EditModal;
