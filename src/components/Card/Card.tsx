import React from "react";

function Card(props: any) {
  return (
    <div className={`w-full h-full  bg-white text-slate-500 ${props.className}`}>
      {props.children}
    </div>
  );
}

export default Card;
