import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? 24}
    height={props.height ?? 24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color ?? "#4FA083"}
      d="M13 5.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6ZM5 11.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5H5ZM9 17.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5H9Z"
    />
  </svg>
);
export default SvgComponent;
