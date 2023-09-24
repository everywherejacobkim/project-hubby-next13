"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { BiUser } from "react-icons/bi";
import Image from "next/image";
import profile from "../../../public/assets/images/svg/profile-img.svg";

const ProfileForm: React.FC = () => {
  const { data: session, status } = useSession();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [profileImage, setProfileImage] = useState<File | null>(null); 
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const maxSizeInBytes = 5 * 1024 * 1024; // size 5mb maximum
  //     if (file.size <= maxSizeInBytes) {
  //       setState({
  //         ...state,
  //         image: file || null,
  //       });
  //     } else {
  //       alert("Image size exceeds the limit (5MB). Please select a smaller image.");
  //     }
  //   }
  // };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("name", formData.name);
      formData.append("email", formData.email);
      formData.append("password", formData.password);
      if (profileImage) {
        formData.append("image", profileImage);
      }

      const response = await fetch(`/api/users/${session?.user?.id}`, {
        method: "PUT",
        body: formData,
      });

      if (response.ok) {
        setUpdateSuccess(true);
        window.alert("Profile updated successfully!");
      } else {
        setUpdateSuccess(false);
        console.error("Error updating profile:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setUpdateSuccess(false);
    }
  };

  return (
    <div className="mx-8 mt-8">
      <div className="border-b-2">
        <h2 className="text-xl font-semibold pb-6">Profile Account</h2>
        <h5>Profile Picture</h5>
        <form className="flex flex-col w-1/2 gap-4" encType="multipart/form-data">
          <div>
            <Image src={profile} alt="user profile picture" className="pt-5 pb-8" />
            <div className="w-full">
              <input
                type="file"
                name="profileImage"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <div className="w-full mt-4">
            <label className="block">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 border-0 rounded"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full">
            <label className="block">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border-0 rounded"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full mb-4">
            <label className="block">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border-0 rounded"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="pb-8">
            <button
              onClick={handleUpdate}
              type="button"
              className="flex justify-center w-1/3 bg-primary-action py-2 text-white rounded-xl"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
