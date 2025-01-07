import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Messager = () => {
    return (
        <div className="flex items-center justify-center h-full bg-gray-700 border-t-2 border-gray-600 p-4">
            <form className="w-full max-w-4xl relative">
                <textarea
                    id="message"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-white bg-gray-600 rounded-lg border border-gray-600 focus:ring-0 focus:border-gray-400 pr-20"
                    placeholder="Leave a comment..."
                ></textarea>
                <button
                    type="button"
                    className="absolute bottom-2 right-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </form>
        </div>
    )
}

export default Messager