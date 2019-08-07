import { Message, SEND_MESSAGE, DELETE_MESSAGE } from './types';

// TypeScript infers that this function is returning SendMessageAction
export function sendMessage(newMessage: Message) {
  return {
    type: SEND_MESSAGE,
    payload: newMessage,
  };
}

// TypeScript infers that this function is returning DeleteMessageAction
export function deleteMessage(timestamp: number) {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp,
    },
  };
}
