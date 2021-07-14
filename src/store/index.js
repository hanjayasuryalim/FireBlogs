import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";
import {FUNCTIONS} from './variables';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sampleBlogCards:[
            { blogTitle: "Blog Card #1",blogCoverPhoto: "stock-1", blogDate:"May 1, 2021"},
            { blogTitle: "Blog Card #2",blogCoverPhoto: "stock-2", blogDate:"May 1, 2021"},
            { blogTitle: "Blog Card #3",blogCoverPhoto: "stock-3", blogDate:"May 1, 2021"},
            { blogTitle: "Blog Card #4",blogCoverPhoto: "stock-4", blogDate:"May 1, 2021"},
        ],
        editPost:null,
        user:null,
        profileEmail:null,
        profileFirstName:null,
        profileLastName:null,
        profileUsername:null,
        profileId:null,
        profileInitials:null
    },
    mutations: {
        toggleEditPost(state,payload){
            state.editPost = payload;
        },
        updateUser(state,payload){
            state.user = payload;
        },
        setProfileInfo(state,doc){
            state.profileId = doc.id;
            state.profileEmail = doc.data().email;
            state.profileFirstName = doc.data().firstname;
            state.profileLastName = doc.data().lastname;
            state.profileUsername = doc.data().username;
        },
        setProfileInitials(state){
            state.profileInitials =
            state.profileFirstName.match(/(\b\S)?/g).join("")+
            state.profileLastName.match(/(\b\S)?/g).join("");
        }   
    },
    actions: {
        async getCurrentUser({commit}){
            const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
            const dbResults = await dataBase.get();
            commit("setProfileInfo",dbResults);
            commit("setProfileInitials");
        }
    },
    getters:{
        [FUNCTIONS.GET_SAMPLE_BLOG_CARDS](state){
            return state.sampleBlogCards;
        },
        [FUNCTIONS.GET_EDIT_POST](state){
            return state.editPost;
        },
        [FUNCTIONS.GET_USER](state){
            return state.user;
        },
        [FUNCTIONS.GET_PROFILE_EMAIL](state){
            return state.profileEmail;
        },
        [FUNCTIONS.GET_FIRST_NAME](state){
            return state.profileFirstName;
        },
        [FUNCTIONS.GET_LAST_NAME](state){
            return state.profileLastName;
        },
        [FUNCTIONS.GET_USERNAME](state){
            return state.profileUsername;
        },
        [FUNCTIONS.GET_ID](state){
            return state.profileId;
        },
        [FUNCTIONS.GET_INITIAL](state){
            return state.profileInitials;
        }
    },
    modules: {
    }
})
