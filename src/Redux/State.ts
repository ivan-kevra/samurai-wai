let rerenderEntireTree = (state: RootStateType) => {
}

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

export let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, postMessage: 'Hi, how are you', likesCount: 15},
            {id: 2, postMessage: 'it`s my first post', likesCount: 20},
            {id: 3, postMessage: 'qweewqe', likesCount: 13},
            {id: 4, postMessage: '4th', likesCount: 14},
        ], newPostText: ''
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
    },
    sidebar: {
        friends: [
            {id: '1', name: 'Dimych'},
            {id: '2', name: 'Andrey'},
            {id: '3', name: 'Sveta'},
        ]
    }
}


export const addPost = () => {
    let newPost = {id: 5, postMessage: state.profilePage.newPostText, likesCount: 23}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer
}

