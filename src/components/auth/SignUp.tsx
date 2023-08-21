"use client";
import React, { useState } from "react";

interface SignUpFormProps {}

const SignUpForm: React.FC<SignUpFormProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Need to add sign-up logic here
  };

  return (
    <form onSubmit={handleFormSubmit} className="max-w-xs mx-auto rounded px-2">
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm pl-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full px-3 py-2 border border-gray/40 rounded bg-gray/10"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-2 text-sm pl-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full px-3 py-2 border border-gray/40 rounded bg-gray/10"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block mb-2 text-sm pl-2">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="w-full px-3 py-2 border border-gray/40 rounded bg-gray/10"
          required
        />
      </div>
      <div className="flex justify-between">
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={handleRememberMeChange}
            className="mr-2"
          />
          <label htmlFor="rememberMe" className="text-gray-500 text-sm">
            Remember me
          </label>
        </div>
      </div>
      <div className="my-4">
        <button
          type="submit"
          className="w-full bg-primary-action hover:bg-primary-action/95 text-white py-2 rounded text-sm p-1"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
