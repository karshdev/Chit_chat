import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function ChatPage() {
const[chats,setChats]=useState([])

    const fetchChats = async () => {
        const { data } = await axios.get("http://localhost:3001/api/chats")
        setChats(data)
        console.log(data)
    }
    useEffect(() => {
        fetchChats();
    }, [])
    return (
        <div>
           {chats.map((chat)=>(
            <div>
                {chat.chatName}
                </div>
           ))}
        </div>
    )
}
