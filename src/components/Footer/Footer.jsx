import React from "react";

function Footer() {
  return (
    <div className="text-gray-400 pt-8 lg:pt-3 pb-8 font-mono text-center font-extralight tracking-wider">
      <p>Copyright &copy; {new Date().getFullYear()} Rajarshi Samaddar</p>
    </div>
  );
}

export default Footer;
