import React from "react";

function Footer() {
  return (
    <div className="text-gray-400 pt-12 lg:pt-8 pb-8 font-mono text-center font-extralight tracking-wider">
      <p>Copyright &copy; {new Date().getFullYear()} Rajarshi Samaddar</p>
    </div>
  );
}

export default Footer;
