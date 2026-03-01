import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { MdOutlineArrowUpward } from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import api from "./api";

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [copied, setCopied] = useState(false);
  const [simplifiedText, setSimplifiedText] = useState("");


  
  const handleSubmit = async () => {
    try {
      const response = await api.post("/explain", { text: prompt });
      setSimplifiedText(response.data.simplified_text);
    } catch (error) {
      console.error("Error simplifying text:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container ">
        <h3 className="text-[40px] md:text-6xl font-bold  tracking-tight  ">
          Complexity,{" "}
          <span className="bg-gradient-to-bl from-transparent via-cyan-500 to-blue-800 bg-clip-text text-transparent kenburns-top-alternate">
            Simplified.
          </span>
        </h3>
        <p className="mt-12 text-[18px] text-[hsla(0, 2%, 66%, 1.00)]  text-center">
          Got a block of text that makes no sense?
          <br /> Drop it here for a clear, human-friendly explanation.
        </p>
        <div className="inputBox">
          <textarea
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
            value={prompt}
            placeholder="Paste your text here..."
          ></textarea>
          {prompt !== "" ? (
            <>
              <i  onClick={handleSubmit} className="sendIcon text-[20px] w-[30px] h-[30px] flex items-center justify-center  rounded-[50%]  transition-all duration-300 hover:opacity-[.8]">
                <MdOutlineArrowUpward />
              </i>
            </>
          ) : null}
        </div>

        <p className="text-[20px] text-[hsla(0, 2%, 66%, 1.00)]  font-[500] mt-[9vh]">
          Here is the simplified version:
        </p>

        <div className="preview ">
          
          <div className="header w-full h-[70px]">
            <h3 className="text-[18px] text-[hsla(0, 2%, 66%, 1.00)] ">
              Simplified Output
            </h3>
            <div className="icons flex items-center gap-[15px]">
              <div onClick={() => setCopied(!copied)} className="icon !w-[auto] !p-[12px] flex items-center gap-[8px] ">
                {copied ? "Copied!" : "Copy"} {copied ? <FaCheck /> : <FiCopy />}
                 
              </div>
            </div>
          </div>
          <div className="content">
            {simplifiedText}
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
