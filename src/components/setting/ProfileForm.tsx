import React from "react";
import Image from "next/image";
import profile from "../../../public/assets/images/svg/profile-img.svg";
import DeleteAccount from "./DeleteAccount";

const ProfileForm: React.FC = () => {
  return (
    <div className="mx-8 mt-8">
      <div className="border-b-2">
        <h2 className="text-xl font-semibold pb-6">Profile Account</h2>
        <h5>Profile Picture</h5>
        <Image src={profile} alt="user profile picture" className="pt-5 pb-8" />

        <form className="grid grid-cols-2 gap-2 w-1/2">
          <div className="w-full">
            <label className="block">Name</label>
            <input
              type="text"
              name="firstName"
              className="w-full px-3 py-2 border-0 rounded "
            />
          </div>
          <br/> 
          {/* <div className="w-full">
            <label className="block">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="w-full px-3 py-2 border-0 rounded "
            />
          </div> */}
          <div className="w-full">
            <label className="block">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border-0 rounded "
            />
          </div>
          <div className="w-full">
            <label className="block">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border-0 rounded "
            />
          </div>
          <div className="pb-8">
            <button
              type="button"
              className="flex justify-center w-1/3 bg-primary-action py-2 text-white rounded-xl"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <DeleteAccount />
    </div>
  );
};

export default ProfileForm;
