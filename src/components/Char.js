import React from 'react'

export default function Char(props) {
  return (
    <div style={boxStyle} onClick={props.clicked}>
      {props.wordContent[props.index]}
    </div>
  )
}

const boxStyle = {
    display: 'inline-block',
    padding: 16,
    margin: 16,
    textAlign: 'center',
    borderRadius: 3,
    color: 'orange',
    fontWeight: 900,
    boxShadow: '2px 2px 5px gray',
}