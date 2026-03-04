import React from "react";

function Button({ text, link }: { text: string; link: string }) {
  const isExternal = link.startsWith("http") || link.startsWith("mailto");
  return (
    <a
      className="btn"
      href={link}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {text}
    </a>
  );
}

export default Button;
