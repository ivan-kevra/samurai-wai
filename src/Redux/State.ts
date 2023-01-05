import {addPostAC, profileReducer, updateNewPostTextAC} from "./profile-reducer";
import {addMessageAC, dialogsReducer, updateNewMessageTextAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

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

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)
    }
}


