/*
 * save.js
 *
 * Handles the save and load system for the game.
 * This module is now designed to integrate with SugarCube's state.
 */

const SaveSystem = {
    init() {
        console.log("Save System Initialized and integrated with SugarCube.");
        // We don't need to load from localStorage here, as SugarCube's
        // own save system handles that automatically. We just need to
        // ensure our initial variables are set if no save exists.

        // The default variables are set in the StoryInit passage in story.twee
    },

    /**
     * Updates a specific variable in SugarCube's game state.
     * @param {string} key The variable to update (e.g., 'trust').
     * @param {*} value The new value.
     */
    setVariable(key, value) {
        if (State.variables.hasOwnProperty(key)) {
            State.variables[key] = value;
            console.log(`SugarCube state updated: ${key} = ${State.variables[key]}`);
            // No need to manually save; SugarCube handles this on passage navigation.
        } else {
            console.warn(`Attempted to set unknown game state variable: ${key}`);
        }
    },

    /**
     * A helper to get a variable from SugarCube's state.
     * @param {string} key The variable to get.
     * @returns The value of the variable, or null if not found.
     */
    getVariable(key) {
        if (State.variables.hasOwnProperty(key)) {
            return State.variables[key];
        }
        console.warn(`Attempted to get unknown game state variable: ${key}`);
        return null;
    }
};
