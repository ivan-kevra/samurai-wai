let renderEntireTree = (state: RootStateType) => {
}
export const subscribe = (observer: (state: RootStateType) => void) => {
    renderEntireTree = observer
}

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
    postMessage: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
}


let state: RootStateType = {
    profilePage: <ProfilePageType>{
        posts: [
            {id: 1, postMessage: 'Hi how are you?', likesCount: 11},
            {id: 2, postMessage: 'It`s my first post', likesCount: 15},
            {id: 2, postMessage: 'Bla bla', likesCount: 15},
            {id: 2, postMessage: 'Da da', likesCount: 15},
        ],
        newPostText: ''
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

export const addPost = () => {
    const newPost: PostType = {id: 5, postMessage: state.profilePage.newPostText, likesCount: 11}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    renderEntireTree(state);
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    renderEntireTree(state)
}



export default state;