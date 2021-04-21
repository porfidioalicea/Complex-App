import React, { useEffect } from "react";

function Container(props) {
  return (
    //ternary operator used to add class if the props is included in the request

    <div className={"container py-md-5 " + (props.wide ? " " : "container--narrow")}>
      {/*props.children includes the code from other components that use the container component */}
      { props.children } 
    </div>
  )
}

export default Container;
