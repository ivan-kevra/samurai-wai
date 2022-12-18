import {rerenderEntireTree} from "../render";


export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    post: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    addPost?: (postMessage: string) => void
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType

}
export type StateType = {
    state: RootStateType
    addPost?: (postMessage: string) => void
}


let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, post: 'Hi how are you?', likesCount: 11},
            {id: 2, post: 'It`s my first post', likesCount: 15},
            {id: 2, post: 'Bla bla', likesCount: 15},
            {id: 2, post: 'Da da', likesCount: 15},
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'},
        ],
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
    }
}

export const addPost = (postMessage: string) => {
    let newPost = {
        id: 5,
        post: postMessage,
        likesCount: 0}
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}

export default state;