import { defineStore } from 'pinia'

export const useLoadContentStore = defineStore('loadContent', {
    state: () => ({
        aboutStatus: false,
        homeStatus: false,
        contactStatus: false,
        projectStatus: false
    }),
    actions: {
        changeContentStatus(item){
            if (item in this) {
                this[item] = !this[item];
            }
        }
    }
});
