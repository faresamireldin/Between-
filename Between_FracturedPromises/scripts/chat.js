/*
 * chat.js
 *
 * Handles the logic for chat interactions.
 * - Simulates realistic message pacing and typing delays.
 * - Renders new messages into the chat window.
 * - Manages chat-related notifications.
 */

const Chat = {
    init() {
        console.log("Chat Module Initialized.");
    },

    /**
     * Displays a new message in a specific chat window.
     * @param {string} chatScreenId The ID of the chat screen (e.g., 'messenger-screen').
     * @param {object} messageData The message content and sender info.
     * @param {string} messageData.text The message text.
     * @param {boolean} messageData.isIncoming True if the message is from the other person.
     * @param {string} messageData.app The app type ('messenger' or 'makelove') for styling.
     */
    displayMessage(chatScreenId, messageData) {
        const chatWindow = document.querySelector(`#${chatScreenId} .chat-messages`);
        if (!chatWindow) return;

        const bubble = document.createElement('div');
        bubble.classList.add('chat-bubble');
        bubble.textContent = messageData.text;

        if (messageData.isIncoming) {
            bubble.classList.add('incoming');
            bubble.classList.add(`${messageData.app}-incoming`);
        } else {
            bubble.classList.add('outgoing');
            bubble.classList.add(`${messageData.app}-outgoing`);
        }

        // Simulate realistic message pacing with a short delay
        setTimeout(() => {
            chatWindow.appendChild(bubble);
            chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to bottom
        }, 500 + Math.random() * 1000);
    },

    /**
     * Shows or hides the typing indicator.
     * @param {string} chatScreenId The ID of the chat screen.
     * @param {boolean} show Whether to show or hide the indicator.
     */
    showTypingIndicator(chatScreenId, show) {
        const indicator = document.querySelector(`#${chatScreenId} .typing-indicator`);
        if (indicator) {
            indicator.style.display = show ? 'block' : 'none';
        }
    }
};

document.addEventListener('DOMContentLoaded', () => Chat.init());
