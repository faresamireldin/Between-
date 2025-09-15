/*
 * ui.js
 *
 * Handles core UI effects and screen transitions by manipulating classes
 * on the main SugarCube container.
 */

const UI = {
    passagesContainer: null,
    currentTheme: '',

    init() {
        console.log("UI Module Initialized.");
        this.passagesContainer = document.getElementById('passages');
        if (!this.passagesContainer) {
            console.error("UI Error: #passages container not found.");
        }
    },

    /**
     * Updates the screen's theme and layout based on story tags.
     * This is called by main.js on the :passagedisplay event.
     * @param {string[]} tags - An array of tags from the current passage.
     */
    updateScreen(tags) {
        if (!this.passagesContainer) return;

        // Find the most relevant theme tag (e.g., 'messenger-screen', 'home-screen').
        const themeTag = tags.find(tag => tag.endsWith('-screen')) || '';

        if (this.currentTheme !== themeTag) {
            console.log(`UI: Changing theme from '${this.currentTheme}' to '${themeTag}'`);

            // Remove the old theme class.
            if (this.currentTheme) {
                this.passagesContainer.classList.remove(this.currentTheme);
            }
            // Add the new theme class.
            if (themeTag) {
                this.passagesContainer.classList.add(themeTag);
            }

            this.currentTheme = themeTag;
        }
    }
};
