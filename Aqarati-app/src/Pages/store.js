import {create} from 'zustand'

export const useViewPage = create((set)=>({
    namePage:"",
    setNamePage: (text) => {
        set(() => ({namePage: text}));
    },
}))