import React from "react";

export function NotoBarChart(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 128 128" {...props}>
      <path fill="#FFF" d="M4 4h120v120H4z"></path>
      <path
        fill="none"
        stroke="#B0BEC5"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M124 24.35H5.57M124 43.67H5.47M124 62.99H5.36M124 82.31H5.26M124 101.64H5.15"
      ></path>
      <path
        fill="#9CCC65"
        d="M38.72 121.91H21.89V55.38c0-1.36 1.1-2.46 2.46-2.46h11.91c1.36 0 2.46 1.1 2.46 2.46v66.53z"
      ></path>
      <path
        fill="#F44336"
        d="M72.42 121.91H55.58V74.84c0-1.36 1.1-2.46 2.46-2.46h11.91c1.36 0 2.46 1.1 2.46 2.46v47.07z"
      ></path>
      <path
        fill="#0091EA"
        d="M103.64 121.91H91.73c-1.36 0-2.46-1.1-2.46-2.46V25.86c0-1.36 1.1-2.46 2.46-2.46h11.91c1.36 0 2.46 1.1 2.46 2.46v93.59c0 1.36-1.1 2.46-2.46 2.46z"
      ></path>
      <path fill="#B0BEC5" d="M124 120H8V4H4v120h120z"></path>
      <path fill="#B0BEC5" d="M122 6v116H6V6h116m2-2H4v120h120V4z"></path>
    </svg>
  );
}

export default NotoBarChart;
