import React, { useEffect } from "react"

function Container(props) {
  return (
    < div className={"container py-md-5 " + (props.wide ? '' :'container--narrow')}>
      {/* props.children cludes the code from other components to this code*/}
      {props.children} 
    </div>
  )
}

export default Container