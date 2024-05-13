import React from "react";

function Slider({ color = "#969696" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 17.97h7m-18 0h2m0 0c0 1.36 1.12 2.463 2.5 2.463S10 19.33 10 17.97s-1.12-2.462-2.5-2.462S5 16.61 5 17.97zm15-5.91h1m-18 0h7m3-5.91h8m-8 0c0-1.36-1.12-2.463-2.5-2.463S8 4.79 8 6.15s1.12 2.462 2.5 2.462S13 7.51 13 6.15zm-10 0h1m12.5 8.373c-1.38 0-2.5-1.103-2.5-2.463s1.12-2.463 2.5-2.463S19 10.7 19 12.06s-1.12 2.463-2.5 2.463z"
      ></path>
    </svg>
  );
}

export default Slider;
