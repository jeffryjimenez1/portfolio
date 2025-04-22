import { defineStore } from 'pinia'

export const useLoadContentStore = defineStore('loadContent', {
    state: () => ({
        activeSection: null
    }),
    actions: {
        setActiveSection(section) {
            this.activeSection = section
        },
        clearActiveSection() {
            this.activeSection = null
        }
    }
});
