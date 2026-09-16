import React from "react";

function Pre({ load }) {
  return (
    <div id={load ? "preloader" : "preloader-none"} aria-hidden="true">
      <span className="preloader-mark">UM</span>
    </div>
  );
}

export default Pre;
