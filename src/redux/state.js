import {rerenderEntireTree} from "../render";

let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'HI, HOW ARE YOU', likesCount: 15},
            {id: 2, message: 'HOW ARE YOU', likesCount: 12},
            {id: 3, message: 'SOME WORDS', likesCount: 20},
            {id: 4, message: 'WRITE ME PLS', likesCount: 10},
            {id: 5, message: 'GO', likesCount: 0},
            {id: 6, message: 'GO', likesCount: 0},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'ROKSANA'},
            {id: 2, name: 'KARINA'},
            {id: 3, name: 'VERONIKA'},
            {id: 4, name: 'ALEXANDR'},
            {id: 5, name: 'LUDMILA'},
            {id: 6, name: 'AZ_1254'},
        ],
        messages: [
            {id: 1, message: 'HI'},
            {id: 2, message: 'HOW ARE YOU'},
            {id: 3, message: 'WHAT ARE YOU DOING'},
            {id: 4, message: 'GO'},
            {id: 5, message: 'GO'},
            {id: 6, message: 'GO'},
        ]
    },

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 7,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}
export default state;