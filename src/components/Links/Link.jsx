import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { RxDownload } from "react-icons/rx";
import * as ReactFaIcons from "react-icons/fa";
import * as ReactFa6Icons from "react-icons/fa6";
import * as ReactSiIcons from "react-icons/si";
import * as ReactMdIcons from "react-icons/md";
import * as ReactIo5Icons from "react-icons/io5";
import * as ReactCgIcons from "react-icons/cg";

function Link({ name, url, icon, iconProvider, iconColor, bgColor, download }) {
  return (
    <>
      <div
        style={{ backgroundColor: bgColor }}
        className="mt-5 lg:w-[40rem]  px-6 flex flex-row items-center text-white text-xl rounded-lg py-3 transform transition duration-100 ease-in-out hover:scale-105 cursor-pointer opacity-90 shadow-2xl shadow-slate-700"
        onClick={() => window.open(url, "_blank")}
      >
        {iconProvider === "fa" &&
          ReactFaIcons[icon]({
            className: "text-[34px]",
            color: iconColor ? iconColor : "white",
          })}
        {iconProvider === "fa6" &&
          ReactFa6Icons[icon]({
            className: "text-[34px]",
            color: iconColor ? iconColor : "white",
          })}
        {iconProvider === "si" &&
          ReactSiIcons[icon]({
            className: "text-[34px]",
            color: iconColor ? iconColor : "white",
          })}
        {iconProvider === "md" &&
          ReactMdIcons[icon]({
            className: "text-[34px]",
            color: iconColor ? iconColor : "white",
          })}
        {iconProvider === "io5" &&
          ReactIo5Icons[icon]({
            className: "text-[34px]",
            color: iconColor ? iconColor : "white",
          })}
        {iconProvider === "cg" &&
          ReactCgIcons[icon]({
            className: "text-[34px]",
            color: iconColor ? iconColor : "white",
          })}
        <h2 className="mx-auto font-mono overflow-hidden overflow-ellipsis whitespace-nowrap">
          {name}
        </h2>
        {(download && <RxDownload size={24} />) || <FiExternalLink size={24} />}
      </div>
    </>
  );
}

export default Link;
