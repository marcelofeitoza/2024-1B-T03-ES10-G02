import React from "react";

function UsersGroup({ color = "#969696" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
      viewBox="0 0 24 25"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 20.675c0-1.632-2.239-2.955-5-2.955s-5 1.323-5 2.955m14-2.955c0-1.212-1.234-2.253-3-2.71M3 17.72c0-1.212 1.234-2.253 3-2.71m12-3.953c.614-.54 1-1.327 1-2.202C19 7.223 17.657 5.9 16 5.9c-.768 0-1.47.284-2 .752m-8 4.405a2.928 2.928 0 01-1-2.202C5 7.223 6.343 5.9 8 5.9c.768 0 1.47.284 2 .752m2 8.113c-1.657 0-3-1.323-3-2.955 0-1.632 1.343-2.955 3-2.955s3 1.323 3 2.955c0 1.632-1.343 2.955-3 2.955z"
      ></path>
    </svg>
  );
}

export default UsersGroup;
