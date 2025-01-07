import ChatBubble from './ChatBubble'

const ChatBox = () => {
    return(
            <div className="chatbox bg-gray-800 max-h-screen overflow-scroll p-4">
                    <ChatBubble type={'ai'}/>
                    <ChatBubble type={'user'}/>
                    <ChatBubble type={'ai'}/>
                    <ChatBubble type={'user'}/>
                    <ChatBubble type={'ai'}/>
                    <ChatBubble type={'user'}/>
                    <ChatBubble type={'ai'}/>
                    <ChatBubble type={'user'}/>
                    <ChatBubble type={'ai'}/>
                    <ChatBubble type={'user'}/>
            </div>
    )
}

export default ChatBox