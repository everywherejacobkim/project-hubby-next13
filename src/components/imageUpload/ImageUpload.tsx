import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import ImageUploadIcon from "../../../public/assets/images/svg/image-upload.svg";

const ImageUpload = ({
  onChange,
  label,
  value,
  disabled,
  placeholder,
}: {
  onChange: (base64: string) => void;
  label?: string;
  value?: string;
  disabled?: boolean;
  placeholder?: any;
}) => {
  const [base64, setBase64] = useState(value);

  const handleChange = useCallback(
    (base64: string) => {
      onChange(base64);
    },
    [onChange]
  );

  const handleDrop = useCallback(
    (files: any) => {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event: any) => {
        setBase64(event.target.result);
        handleChange(event.target.result);
      };
      reader.readAsDataURL(file);
    },
    [handleChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop: handleDrop,
    disabled,
    accept: {
      "image/jpg": [],
      "image/png": [],
    },
  });

  return (
    <div
      {...getRootProps({
        className: "relative p-2 rounded-full bg-white cursor-pointer",
      })}
    >
      <input {...getInputProps()} />
      <Image
        src={ImageUploadIcon}
        height="30"
        width="30"
        alt="icon-upload"
        className="absolute bottom-2 right-2"
      />
      {base64 ? (
        <div className="flex items-center justify-center">
          <Image src={base64} height="100" width="100" alt="Uploaded image" />
        </div>
      ) : (
        <Image
          src={placeholder}
          height="100"
          width="100"
          alt="Uploaded image"
        />
      )}
    </div>
  );
};

export default ImageUpload;
