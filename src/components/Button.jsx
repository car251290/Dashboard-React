import React from 'react'

import { useStateContext } from '../contexts/ContextProvider'
const Button = ({icon,bgcolor,color,borderRadius,size,width,text,bgHoverColor}) => {
  const {setisClicked,initialState} = useStateContext()
  return (
    <button type = 'button' onClick={()=> setisClicked(initialState)}
    style={{backgroundColor:bgcolor,color,borderRadius}}
    className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
     {icon}{text}

    </button>

  );
}

export default Button