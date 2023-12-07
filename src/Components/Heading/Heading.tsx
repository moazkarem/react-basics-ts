import {   ReactNode } from "react";

interface Iprops{
    title:string,
    children:ReactNode
}
const Heading = ({title , children}:Iprops) => {
   
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

export default Heading
