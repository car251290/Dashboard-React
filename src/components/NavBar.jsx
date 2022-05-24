import React,{useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai';
import {FiShoppingCart} from 'react-icons/fi-shopping-cart';

import {BsChatLeft} from 'react-icons/bs';

import {RiNotifacation3Line} from 'react-icons/ri';
import { MdKeyboard } from 'react-icons/md';

import {TooltipComponent} from '@syncfusion/ej2-react-popups';

import avatar from '../Data/dummy';
import {Cart,Chat,Notification,UserProfile} from './components';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({title,customFunc,icon,color,dotColor}) => (
<TooltipComponent content={title} position="BottomCenter">
  <button type="button" onClick={customFunc} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray"></button>
</TooltipComponent>)

const NavBar =() => {
  const {activeMenu,setActiveMenu} = useStateContext();
  return (

    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title="Menu" customFunc={()=> setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} color="blue" icon={<AiOutlineMenu/>}/>
    </div>
  )
}

export default NavBar
