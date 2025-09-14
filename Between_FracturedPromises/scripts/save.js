/*
 * save.js
 *
 * Handles the save and load system for the game.
 * - Manages game state variables (trust, romance, suspicion).
 * - Interacts with localStorage to persist progress.
 * - Handles autosaves at key decision points.
 */

const SaveSystem = {
    gameState: {
        trust: 50,
        romance: 0,
        suspicion: 10,
        currentPassage: 'Start',
        unlockedGallery: []
    },

    init() {
        console.log("Save System Initialized.");
        this.loadGame('autosave'); // Automatically load progress
    },

    /**
     * Saves the current game state to localStorage.
     * @param {string} slotName The name of the save slot (e.g., 'save1', 'autosave').
     */
    saveGame(slotName) {
        try {
            const stateJson = JSON.stringify(this.gameState);
            localStorage.setItem(`between_${slotName}`, stateJson);
            console.log(`Game saved to slot: ${slotName}`);
        } catch (e) {
            console.error("Error saving game:", e);
        }
    },

    /**
     * Loads a game state from localStorage.
     * @param {string} slotName The name of the save slot to load.
     * @returns {boolean} True if the load was successful, false otherwise.
     */
    loadGame(slotName) {
        try {
            const stateJson = localStorage.getItem(`between_${slotName}`);
            if (stateJson) {
                this.gameState = JSON.parse(stateJson);
                console.log(`Game loaded from slot: ${slotName}`, this.gameState);
                // After loading, the game engine should redirect to gameState.currentPassage
                return true;
            }
            return false;
        } catch (e) {
            console.error("Error loading game:", e);
            return false;
        }
    },

    /**
     * Updates a specific variable in the game state.
     * @param {string} key The variable to update (e.g., 'trust').
     * @param {*} value The new value.
     */
    setVariable(key, value) {
        if (key in this.gameState) {
            this.gameState[key] = value;
            console.log(`Game state updated: ${key} = ${value}`);
        } else {
            console.warn(`Attempted to set unknown game state variable: ${key}`);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => SaveSystem.init());
