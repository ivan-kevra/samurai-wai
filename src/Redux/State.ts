export type MessagesType = {
    id: string
    message: string
}
export type UsersType = {
    id: string
    name: string
}
export type FriendsType = {
    id: string
    name: string
}
export type PostsType = {
    id: number
    postMessage: string
    likesCount: number
}
export type MessagesPageType = {
    messages: MessagesType[]
    users: UsersType[]
    newMessageText: string
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type SidebarType = {
    friends: FriendsType[]
}
export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: (state: RootStateType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsType) => void
}

export type ActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>


export const addPostAC = (newPostText: string) => {
    return {type: 'ADD-POST', newPostText} as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText} as const
}
export const addMessageAC = (newMessageText: string) => {
    return {type: 'SEND-MESSAGE', newMessageText} as const
}
export const updateNewMessageTextAC = (newMessage: string) => {
    return {type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage} as const
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, postMessage: 'Hi, how are you', likesCount: 15},
                {id: 2, postMessage: 'it`s my first post', likesCount: 20},
                {id: 3, postMessage: 'qweewqe', likesCount: 13},
                {id: 4, postMessage: '4th', likesCount: 14},
            ], newPostText: '',
        },
        messagesPage: {
            users: [
                {id: '1', name: 'Dimych'},
                {id: '2', name: 'Andrey'},
                {id: '3', name: 'Sveta'},
                {id: '4', name: 'Sasha'},
                {id: '5', name: 'Viktor'},
                {id: '6', name: 'Valera'}
            ],
            messages: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'how are you'},
                {id: '3', message: '3rd message'},
                {id: '4', message: '4 message'},
                {id: '5', message: '5th message'},
            ],
            newMessageText: '',
        },
        sidebar: {
            friends: [
                {id: '1', name: 'Dimych'},
                {id: '2', name: 'Andrey'},
                {id: '3', name: 'Sveta'},
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {id: 5, postMessage: action.newPostText, likesCount: 23}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === 'SEND-MESSAGE') {
            let newMessage = {id: '6', message: action.newMessageText}
            this._state.messagesPage.messages.push(newMessage)
            this._state.messagesPage.newMessageText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagesPage.newMessageText = action.newMessage
            this._callSubscriber(this._state)
        }
    }
}
