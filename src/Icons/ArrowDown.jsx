import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
     width={25}
     height={25}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 13.171l4.95-4.95 1.414 1.415L12 16 5.636 9.636 7.05 8.222l4.95 4.95z" />
    </svg>
  )
}

export default SvgComponent
