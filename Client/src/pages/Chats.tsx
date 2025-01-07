import ChatBox from "../components/ChatBox"
import Messager from "../components/Messager"

const Chats = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-900 text-white">
            <div className="flex-grow overflow-hidden bg-gray-800 p-4 relative z-10">
                <ChatBox />
            </div>
            <div className="h-40 bg-gray-700 p-4 relative z-20">
                <Messager />
            </div>
        </div>
    )
}

export default Chats