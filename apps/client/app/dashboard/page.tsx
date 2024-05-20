"use client";

import { ChangeEvent, useRef, useState } from "react";
import Navbar from "../navbar";
import { InputInit } from "../types/dashboard";

export default function form() {
  const [inputData, setInputData] = useState<InputInit>({
    userText: "",
    customization: "",
    diffusionKey: "",
    prompt: ""
  });

  //LOADING variable has no initial value set... keeping false for instance
  const [loading, setLoading] = useState<boolean>(false);
  const keyRef = useRef<HTMLInputElement>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  }

  /*   async function handleSubmit() {
      console.log(inputData);
      try {
        if (inputData.prompt === "" || inputData.customization === "") {
          alert("data is not filled");
          return;
        }
        const response = await fetch("http://localhost:5000/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        if (response.ok) {
          const blob = await response.blob();
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'example.pdf');
          document.body.appendChild(link);
          link.click();
          link.parentNode.removeChild(link);
        } else {
          console.error('Failed to download PDF');
        }
      } catch (error) {
        console.log("error message => " + error);
      }
    } */

  async function handleSubmit() {
    console.log(inputData);

    setLoading(true);

    try {

      if (inputData.prompt === "" || inputData.customization === "") {
        alert("data is not filled");
        return;
      }

      const response = await fetch("http://localhost:5000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      if (response.ok) {
        console.log(response.statusText);
        alert
      } else {
        console.log(response);
        alert(response.statusText);
        throw new Error();
      }

    } catch (error) {
      console.log("error message => " + error);
    }

    setLoading(false);

  }

  return (
    <>
      <Navbar />

      <div className="form-control w-full max-w-lg px-4 text-center ">
        <div>
          <span className=" drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]  text-[28px] tracking-wide font-bold">
            What is your Story?{" "}
            <span className="text-red-500 font-normal">*</span>
          </span>
          <textarea
            name="userText"
            placeholder="Once upon a time there was villian..."
            className="textarea textarea-bordered textarea-lg w-full min-w-lg h-48"
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <div className="mt-5">
          <span className="label-text drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-[28px] tracking-wide  font-bold mt-5">
            Your Comic style? <span className="text-red-500 font-normal">*</span>
          </span>
          <input
            type="text"
            name="customization"
            placeholder="Type here"
            className="input input-bordered w-full min-w-lg h-12"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="mt-5">
          <span className="label-text drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-[28px] tracking-wide font-bold mt-5">
            Key <span className="text-red-500 font-normal">*</span>
            <span className="label-text">
              (Get key from <a className="link link-primary">here</a>)
            </span>{" "}
            <br />
            <input
              name="diffusionKey"
              type="text"
              placeholder="Type here"
              className={`input input-bordered w-full min-w-lg h-12 `}
              onChange={(e) => handleChange(e)}
              ref={keyRef}
            />
          </span>
        </div>
        <div>
          {loading ? (
            <button className="btn btn-wide btn-outline btn-success mt-5 " disabled>
              <span className="loading loading-dots loading-lg bg-white"></span>
            </button>
          ) : (
            <button
              className="btn btn-wide btn-secondary mt-5"
              onClick={handleSubmit}
            >
              GO
            </button>
          )}
        </div>
      </div>
    </>
  );
}
