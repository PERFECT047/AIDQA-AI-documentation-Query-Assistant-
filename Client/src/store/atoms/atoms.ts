import { atom } from "recoil";

interface ChatMessage {
    type: 'user' | 'ai';
    time: string,
    message: string;
  }

export const queryAtom = atom<ChatMessage>({
    key: "queryAtom",
    default: {
        type: 'user',
        time: "",
        message: ""
    },
});

export const chatHistoryAtom = atom<ChatMessage[]>({
    key: "chatHistoryAtom",
    default: [],
  });
