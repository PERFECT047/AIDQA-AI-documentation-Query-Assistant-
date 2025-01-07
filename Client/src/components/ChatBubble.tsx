const ChatBubble = ({ type}: { type: string}) => {
  const bubbleClass = type === 'user' ? 'bg-gray-700 text-white rounded-se-xl rounded-s-xl' : 'bg-gray-600 text-white rounded-es-xl rounded-e-xl'
  return (
    <div className={`flex items-start gap-2.5 my-4 ${type === 'user' ? 'justify-end mr-4' : 'ml-4'}`}>
      <div className={`flex flex-col w-full max-w-max leading-1.5 p-4 shadow-inner border-gray-800 ${bubbleClass}`}>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-xs font-normal text-gray-400">11:46</span>
        </div>
        <p className="text-sm font-normal py-2.5">Hi there. It's soo awsome to see you again. Do you have any questions? I would gladly answer all of your queries.</p>
      </div>
    </div>
  )
}

export default ChatBubble