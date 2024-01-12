import React from "react";
import linkData from "../../db/links.json";
import Link from "./Link";

function Links() {
  return (
    <>
      <div className="pb-10">
        {linkData.links.map((link, index) => (
          <Link
            key={index}
            name={link.name}
            url={link.url}
            icon={link.icon}
            iconProvider={link.iconProvider}
            iconColor={link.iconColor}
            bgColor={link.bgColor}
            download={link.download}
          />
        ))}
      </div>
    </>
  );
}

export default Links;
