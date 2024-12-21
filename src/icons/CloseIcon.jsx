import React from 'react'

export default function CloseIcon(props) {
  return (
    <svg viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.596.782l2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782z"
        fill={props?.fill || "#69707D"}
        fillRule="evenodd"
      />
    </svg>
  )
}
