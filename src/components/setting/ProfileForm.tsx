"use client";
import React, { useState, useEffect, useCallback } from "react";
import useCurrentUser from "@/lib/hooks/useCurrentUser";
import useUser from "@/lib/hooks/useUser";
import axios from "axios";
import ImageUpload from "../imageUpload/ImageUpload";
import { toast } from "react-hot-toast";
import placeholder from "../../../public/assets/images/svg/user-placeholder.svg";

const ProfileForm: React.FC = () => {
  const { data: currentUser } = useCurrentUser();
  const { mutate: mutateFetchedUser } = useUser(currentUser?.data?.id);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setName(currentUser?.data?.name);
    setEmail(currentUser?.data?.email);
    setPassword(currentUser?.data?.password);
    setImage(currentUser?.data?.image);
  }, [currentUser]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      await axios.patch(`/api/users/${currentUser?.data?.id}`, {
        name,
        email,
        password,
        image,
      });
      mutateFetchedUser();
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Oops.. Please try again!");
    } finally {
      setIsLoading(false);
    }
  }, [name, email, password, image, mutateFetchedUser]);

  return (
    <div className="mx-8 mt-8">
      <div className="border-b-2">
        <h2 className="text-xl font-semibold pb-6">Profile Account</h2>
        <form
          className="flex flex-col w-1/2 gap-4"
          encType="multipart/form-data"
        >
          <div className="w-full flex mt-2">
            <ImageUpload
              value={image}
              onChange={(image) => setImage(image)}
              label="Upload"
              disabled={isLoading}
              placeholder={placeholder}
            />
          </div>
          <div className="w-full mt-4">
            <label className="block">Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-3 py-2 border-0 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label className="block">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border-0 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full mb-4">
            <label className="block">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border-0 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="pb-8">
            <button
              onClick={onSubmit}
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
