"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image"
import axios from "axios";
import { useRouter } from "next/navigation";
// import profile from "../../../public/assets/images/svg/profile-img.svg";

interface InitialStateProps {
  name: string;
  email: string;
  password: string;
  image: string;
}

const initialState: InitialStateProps = {
  name: "",
  email: "",
  password: "",
  image: "",
};

const SignUpForm = () => {
  const [state, setState] = useState(initialState);
  const [imageSrc, setImageSrc] = useState("");

  const router = useRouter();

  useEffect(() => {
    const apiUrl = '/api/defaultImage';
  
    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.blob();
        } else {
          throw new Error('Failed to fetch default profile image');
        }
      })
      .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };


  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("name", state.name);
    formData.append("email", state.email);
    formData.append("password", state.password);
    formData.append("image", imageSrc); 
    
    axios
      .post("/api/register", formData)
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
      <div className="my-4">
        <button
          type="submit"
          className="w-full bg-primary-action hover:bg-primary-action/95 text-white py-2 rounded text-sm p-1"
        >
          Sign up
        </button>
      </div>
      <div>
        {console.log("image source: ", imageSrc)}
      <Image src={imageSrc} alt="Default Profile" width={100} height={100}/>
    </div>
    </form>
  );
};

export default SignUpForm;
