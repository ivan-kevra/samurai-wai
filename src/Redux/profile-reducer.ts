import {ActionsType, ProfilePageType} from "./State";


export const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: 5, postMessage: action.newPostText, likesCount: 23}
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            return state;
        default:
            return state;
    }
};

export const addPostAC = (newPostText: string) => {
    return {type: 'ADD-POST', newPostText} as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {type: 'UPDATE-NEW-POST-TEXT', newText} as const
}

