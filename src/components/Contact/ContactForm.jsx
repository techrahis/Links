import React from "react";
import { IoIosSend } from "react-icons/io";

function ContactForm() {
  return (
    <div className="items-center mt-5 lg:ml-40">
      <p className="text-gray-200 lg:text-gray-700 font-medium text-xl lg:text-2xl opacity-90 font-mono mb-3 text-center lg:text-left">
        Send Me A Message
      </p>
      <form
        action={import.meta.env.VITE_ACTION_URL}
        method="POST"
        className="flex flex-col lg:w-[25rem] align-middle"
      >
        <label className="text-white text-lg opacity-70 font-mono">Name</label>
        <input
          className="rounded-md p-2 mb-4 opacity-30"
          type="text"
          name="Name"
          required
        />
        <label className="text-white text-lg opacity-70 font-mono">Email</label>
        <input
          className="opacity-30 rounded-md p-2 mb-4"
          type="email"
          name="Email"
          required
        />
        <label className="text-white text-lg opacity-70 font-mono">
          Subject
        </label>
        <input
          className="opacity-30 rounded-md p-2 mb-4"
          type="text"
          name="Subject"
          required
        />
        <label className="text-white text-lg opacity-70 font-mono">
          Message
        </label>
        <textarea
          className="opacity-30 rounded-md p-2 mb-4"
          name="Message"
          rows="6"
          required
        ></textarea>
        <input
          type="hidden"
          name="_subject"
          value="New contact form submission!"
        ></input>
        <input type="hidden" name="_template" value="table"></input>
        <input type="hidden" name="_next" value="rajarshisamaddar.com"></input>
        <button
          type="submit"
          className="bg-violet-700 text-xl text-white font-bold py-2 px-4 rounded font-mono flex items-center justify-center opacity-90 transform transition duration-100 ease-in-out hover:scale-105 cursor-pointer"
        >
          Send <IoIosSend className="ml-1" />
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
