"use client";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

interface InitialStateProps {
  email: string;
  password: string;
}

const initialState: InitialStateProps = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [state, setState] = useState(initialState);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const callback = await signIn("credentials", {
        ...state,
        redirect: false,
      });

      if (callback?.ok) {
        router.refresh();
        router.push("/dashboard");
      } else if (callback?.error) {
        console.error("Error signing in:", callback.error);
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
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
        <div className="mb-4">
          <a
            href="/forgot-password"
            className="text-blue-500 hover:underline text-sm"
          >
            Forgot password
          </a>
        </div>
      </div> */}
      <div className="my-4">
        <button
          type="submit"
          className="w-full bg-primary-action hover:bg-primary-action/95 text-white py-2 rounded text-sm p-1"
        >
          Sign in
        </button>
      </div>
      <hr className="custom-divider-1" />
      <div>
        <button
          type="button"
          onClick={() =>
            signIn("google", {
              callbackUrl: "/dashboard",
            })
          }
          className="flex justify-center items-center w-full bg-neutral-dark hover:bg-neutral-dark/95 text-black bg-gray-dark py-2 rounded"
        >
          <FcGoogle className="inline-block mr-2" />
          <p className="text-white text-xs p-1">Sign in with Google</p>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
