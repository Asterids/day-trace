import React from 'react'

export default function SingleHaiku (props) {

    return (
      <div id="lines">
        <div className="line">{props.line1}</div>
        <div className="line">{props.line2}</div>
        <div className="line">{props.line3}</div>
        <br />
        <div className="line"><button>Clear Haiku</button></div>
      </div>
    )

}
