import React from 'react'
import './index.scss'
const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((ele, i) => (
        <span key={ele + i} className={`${letterClass} _${i + idx}`}>
          {ele}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
