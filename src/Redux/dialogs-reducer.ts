import {ActionsType, MessagesPageType} from "./State";

export const dialogsReducer = (state: MessagesPageType, action: ActionsType) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let newMessage = {id: '6', message: action.newMessageText}
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
};

export const addMessageAC = (newMessageText: string) => {
    return {type: 'SEND-MESSAGE', newMessageText} as const
}
export const updateNewMessageTextAC = (newMessage: string) => {
    return {type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage} as const
}
