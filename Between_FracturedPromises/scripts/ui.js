/*
 * ui.js
 *
 * Handles core UI effects and screen transitions.
 * - Smooth screen fades and animations
 * - Manages which screen or UI state is currently active
 * - Provides reusable UI components like modals or notifications
 */

const UI = {
    activeScreen: null,

    init() {
        console.log("UI Module Initialized.");
        // Set the initial screen (e.g., splash screen)
        this.activeScreen = document.getElementById('splash-screen'); // Example
        // this.showScreen('splash-screen');
    },

    /**
     * Hides the currently active screen and shows a new one.
     * @param {string} screenId The ID of the HTML element to show.
     */
    showScreen(screenId) {
        console.log(`Switching to screen: ${screenId}`);

        if (this.activeScreen) {
            this.activeScreen.style.display = 'none';
        }

        const nextScreen = document.getElementById(screenId);
        if (nextScreen) {
            nextScreen.style.display = 'block'; // Or 'flex', 'grid', etc.
            this.activeScreen = nextScreen;
        } else {
            console.error(`Screen with ID "${screenId}" not found.`);
        }
    },

    /**
     * Applies a temporary pulse animation to an element.
     * @param {HTMLElement} element The element to animate.
     */
    pulse(element) {
        if (!element) return;
        element.classList.add('pulse-animation');
        // Remove the class after the animation finishes to allow re-triggering
        setTimeout(() => {
            element.classList.remove('pulse-animation');
        }, 1500); // Corresponds to animation duration in global.css
    },

    /**
     * Shows a notification dot on an app icon.
     * @param {string} appName The name of the app (e.g., 'messenger').
     * @param {boolean} show Whether to show or hide the dot.
     */
    showNotificationDot(appName, show) {
        const dot = document.querySelector(`.app[data-app='${appName}'] .notification-dot`);
        if (dot) {
            dot.style.display = show ? 'block' : 'none';
        }
    }
};

document.addEventListener('DOMContentLoaded', () => UI.init());
