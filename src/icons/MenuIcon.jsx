import React from 'react'

export default function MenuIcon(props) {
  return (
    <svg viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 12v3H0v-3h16zm0-6v3H0V6h16zm0-6v3H0V0h16z"
        fill={props?.fill || "#69707D"}
        fillRule="evenodd"
      />
    </svg>
  )
}
