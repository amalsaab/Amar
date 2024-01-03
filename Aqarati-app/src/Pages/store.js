import {create} from 'zustand'

export const useViewPage = create((set)=>({
    namePage:"",
    setNamePage: (text) => {
        set(() => ({namePage: text}));
    },
}))

export const useViewContent = create((set)=>({
    contentBox:"",
    setContentBox: (text) => {
        set(() => ({contentBox: text}));
    },
}))