import React from "react";

function Pre({ load }) {
  return (
    <div id={load ? "preloader" : "preloader-none"} aria-hidden="true">
      <img
        className="preloader-logo"
        src={`${process.env.PUBLIC_URL}/utku mese logoo.png`}
        alt=""
      />
    </div>
  );
}

export default Pre;
