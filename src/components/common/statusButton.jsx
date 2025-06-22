import React from "react";

export default function StatusButton({ color, name }) {
  return (
    <span
      className={`inline-flex items-center rounded-full  ${color.bg} px-2.5 py-0.5 text-sm font-medium ${color.txt} ring-1 ring-gray-500/10 ring-inset`}
    >
      {name}
    </span>
  );
}
