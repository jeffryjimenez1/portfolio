import { defineStore } from 'pinia'

export const useLoadContentStore = defineStore('loadContent', {
    state: () => ({
        aboutStatus: false,
        homeStatus: false,
        contactStatus: false
    }),
    actions: {
        changeContentStatus(item){
            if (item in this) { // Ensure the key exists in the store
                this[item] = !this[item]; // Toggle the property dynamically
            }
        }
    }
});
