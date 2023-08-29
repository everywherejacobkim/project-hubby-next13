"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface InitialStateProps {
  name: string;
  email: string;
  password: string;
}

const initialState: InitialStateProps = {
  name: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const [state, setState] = useState(initialState);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("/api/register", state)
      .then(() => {
        router.refresh();
      })
      .then(() => {
        setTimeout(() => {
          router.push("/login");
        }, 2500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleFormSubmit} className="max-w-xs mx-auto rounded px-2">
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm pl-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={state.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray/40 rounded bg-gray/10"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm pl-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={state.email}
          onChange={handleChange}
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
          name="password"
          value={state.password}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray/40 rounded bg-gray/10"
          required
        />
      </div>
      {/* <div className="mb-4">
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
      </div> */}
      {/* <div className="flex justify-between">
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
      </div> */}
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
