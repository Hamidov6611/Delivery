import ChatList from '@/components/admin/ChatList'
import ChatMessage from '@/components/admin/ChatMessage'
import React from 'react'

const Chat = () => {
  return (
    <div className='p-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 w-full h-[755px] '>
      <ChatList />
      <ChatMessage />
    </div>
  )
}

export default Chat