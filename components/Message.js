import { useMoralis } from 'react-moralis'
import Avatar from './Avatar';
import TimeAgo from 'timeago-react';
function Message({ message }) {
    const { user } = useMoralis();
    const isUserMessage = message.get("ethAddress") === user.get("ethAddress");
    return (
        <div className={`flex items-end space-x-2 relative ${isUserMessage && "justify-end"}`}>
            {/* bubble mesage + Avatar */}

            <div className={`relative h-8 w-8 ${isUserMessage && "order-last ml-2"}`} >
                <Avatar username={user.getUsername()} />
            </div>

            <div className={`flex space-x-4 p-2 mt-5 rounded-lg ${isUserMessage
                ? "rounded-br-none bg-pink-300" : "rounded-bl-none bg-blue-400"}`} >
                <p>{message.get("message")}</p>
                {/* avatar goes here */}
            </div>

            <TimeAgo
                className={`text-[10px] italic text-black-400 ${isUserMessage && "order-first"}`}
                datetime={message.createdAt} />

            <p className={`absolute -bottom-5 text-xs ${isUserMessage ? "text-pink-300" : "text-blue-400"}`}>
                {message.get("username")}
            </p>
        </div >
    )
}

export default Message
