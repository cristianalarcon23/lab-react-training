import React from 'react'

export default function Random(props) {
    let random = Math.floor(Math.random() * (props.max - props.min + 1) + props.min)
  return (
    <div className='greet'>Random value between {props.min} and {props.max} = {random}</div>
  )
}
