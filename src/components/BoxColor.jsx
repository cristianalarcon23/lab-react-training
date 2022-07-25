import React from 'react'

export default function BoxColor(props) {

    const divStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    };

  return (
    <div className="rgb" style={divStyle}>rgb({props.r},{props.g},{props.b})</div>
  )
}
