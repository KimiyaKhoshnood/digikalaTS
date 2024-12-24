import React from "react"

const LineThroughPrice:React.FC<{oldPrice:string}> = ({oldPrice}) => {
  return (
    <span className="text-xs line-through text-gray-300">{oldPrice}</span>
  )
}

export default LineThroughPrice