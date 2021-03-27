import React from 'react'

const Button = ({
  onClick
}) => {
  const clickHandle = () => {
    // no op
  }

  return (
    <button onClick={onClick}>
      Button
    </button>
  )
}

export default Button