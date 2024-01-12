import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoIosSend } from "react-icons/io";
import { BsSendCheckFill } from "react-icons/bs";

function ContactForm() {
  const [formState, setFormState] = useState({});
  const [sendState, setSendState] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [captchaError, setCaptchaError] = useState(false);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setCaptcha(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.captcha !== captcha) {
      setCaptchaError(true);
      return;
    }
    axios
      .post("https://api.rajarshisamaddar.com/send-email", formState)
      .then((res) => {
        res.status === 200 && setFormState({}),
          setSendState(true),
          setCaptchaError(false);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="items-center mt-14 lg:mt-5 lg:ml-40">
      <p className="text-gray-200 lg:text-gray-700 font-medium text-3xl opacity-90 font-mono mb-5 lg:mb-3 text-center lg:text-left">
        Send Me A Message
      </p>
      <form
        className="flex flex-col lg:w-[25rem] align-middle"
        onSubmit={handleSubmit}
      >
        <label className="text-white text-lg opacity-70 font-mono">Name</label>
        <input
          className="rounded-md p-2 mb-4 opacity-30 mt-2"
          type="text"
          name="Name"
          required
          value={formState.name || ""}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          disabled={sendState}
        />
        <label className="text-white text-lg opacity-70 font-mono">Email</label>
        <input
          className="opacity-30 rounded-md p-2 mb-4 mt-2"
          type="email"
          name="Email"
          required
          value={formState.email || ""}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
          disabled={sendState}
        />
        <label className="text-white text-lg opacity-70 font-mono">
          Subject
        </label>
        <input
          className="opacity-30 rounded-md p-2 mb-4 mt-2"
          type="text"
          name="Subject"
          required
          value={formState.subject || ""}
          onChange={(e) =>
            setFormState({ ...formState, subject: e.target.value })
          }
          disabled={sendState}
        />
        <label className="text-white text-lg opacity-70 font-mono">
          Message
        </label>
        <textarea
          className="opacity-30 rounded-md p-2 mb-4 mt-2"
          name="Message"
          rows="6"
          required
          value={formState.message || ""}
          onChange={(e) =>
            setFormState({ ...formState, message: e.target.value })
          }
          disabled={sendState}
        ></textarea>

        <label className="text-white text-lg opacity-70 font-mono">
          Captcha
        </label>
        <div className="flex items-stretch gap-4 pt-2">
          <div
            className="flex items-center p-2 text-center h-10 bg-white rounded-md opacity-70"
            style={{
              fontFamily: "monospace",
              fontSize: "20px",
              fontWeight: "bold",
              color: "black",
              textShadow: "2px 2px 3px #000",
              transform: "rotate(-2deg) skewX(-10deg)",
              userSelect: "none",
              textDecoration: "line-through",
            }}
          >
            {captcha}
          </div>
          <input
            type="text"
            className="flex-grow opacity-30 rounded-md p-2"
            required
            value={formState.captcha || ""}
            onChange={(e) =>
              setFormState({ ...formState, captcha: e.target.value })
            }
            disabled={sendState}
          />
        </div>
        {captchaError && (
          <p className="text-red-500 font-semibold text-base font-mono mt-2">
            Captcha does not match
          </p>
        )}
        <button
          type="button"
          className="bg-slate-400 mt-4 text-white w-full p-2 rounded-md opacity-80 font-mono mb-4"
          onClick={generateCaptcha}
          disabled={sendState}
        >
          Generage New Captcha
        </button>

        <div className="flex items-center pt-2 pb-4">
          <input
            type="checkbox"
            id="copy"
            name="copy"
            className="mr-2 h-4 w-4"
            checked={formState.receipt || false}
            onChange={(e) =>
              setFormState({ ...formState, receipt: e.target.checked })
            }
            disabled={sendState}
          />
          <label
            htmlFor="copy"
            className="text-white text-lg opacity-70 font-mono"
          >
            Send me a copy
          </label>
        </div>

        {(sendState && (
          <button
            disabled={sendState}
            className="bg-green-700 text-xl text-white font-bold py-2 px-4 rounded font-mono flex items-center justify-center opacity-90 transform transition duration-100 ease-in-out hover:scale-105 cursor-pointer"
          >
            Message Sent <BsSendCheckFill className="ml-1" />
          </button>
        )) || (
          <button
            type="submit"
            className="bg-violet-700 text-xl text-white font-bold py-2 px-4 rounded font-mono flex items-center justify-center opacity-90 transform transition duration-100 ease-in-out hover:scale-105 cursor-pointer"
          >
            Send <IoIosSend className="ml-1" />
          </button>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
