import React from 'react'
import { BiLogOut } from "react-icons/bi";
import MessageContainer from '../messages/MessageContainer';
const LogoutButton = () => {
  return (
    <div className='mt-auto'>
      <BiLogOut className='w-6 h-6 text-white cursor-pointer'/>
      <MessageContainer/>
    </div>
  )
}

export default LogoutButton
