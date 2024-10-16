import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const ImageUpload = ({ onImageUpload, name, defaultImage }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
      if (onImageUpload) {
        onImageUpload(file);
      }
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPreview(null);
  };

  return (
    <div className="uploadContainer">
      <label htmlFor={name}>
        <img src={`${preview ? preview : defaultImage}`} alt="Image Preview" />
      </label>
      {preview && (
        <button
          type="button"
          onClick={handleRemoveImage}
          className="button-danger remove-button"
          title="Remove Image"
        >
          <FaTrashAlt />
        </button>
      )}

      <input
        type="file"
        accept="image/*"
        id={name}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageUpload;
